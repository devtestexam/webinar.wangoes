# ─────────────────────────────────────────────
# Stage 1: Install dependencies
# ─────────────────────────────────────────────
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy lockfile and package manifest only — maximises layer cache hits.
COPY package.json package-lock.json* ./

RUN npm ci --prefer-offline

# ─────────────────────────────────────────────
# Stage 2: Build the application
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Bring in installed node_modules from deps stage.
COPY --from=deps /app/node_modules ./node_modules

# Copy all source files (respects .dockerignore).
COPY . .

# next.config.ts must have `output: "standalone"` for this stage to produce
# .next/standalone. The build will fail fast if it is missing.
RUN npm run build

# Debugging: confirm standalone folder was created before we try to COPY it.
RUN ls -la .next/ && ls -la .next/standalone/

# ─────────────────────────────────────────────
# Stage 3: Production runner (minimal image)
# ─────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user for security.
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy public assets.
COPY --from=builder /app/public ./public

# Create .next dir with correct ownership before copying into it.
RUN mkdir -p .next && chown nextjs:nodejs .next

# Copy standalone server output (includes node_modules subset — no full install needed).
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static assets into the location the standalone server expects them.
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# The standalone build produces a self-contained server.js at the root.
CMD ["node", "server.js"]
