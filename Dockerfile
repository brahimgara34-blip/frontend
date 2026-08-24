FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache git curl

# Accept build arguments from Easypanel
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_META_PIXEL_ID
ARG NEXT_PUBLIC_TIKTOK_PIXEL_ID
ARG NEXT_PUBLIC_SNAPCHAT_PIXEL_ID
ARG CACHEBUST=2026082502

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_META_PIXEL_ID=$NEXT_PUBLIC_META_PIXEL_ID
ENV NEXT_PUBLIC_TIKTOK_PIXEL_ID=$NEXT_PUBLIC_TIKTOK_PIXEL_ID
ENV NEXT_PUBLIC_SNAPCHAT_PIXEL_ID=$NEXT_PUBLIC_SNAPCHAT_PIXEL_ID

# Copy local files if present in context
COPY . .

# Invalidate Docker build cache automatically on every git commit push
ADD https://api.github.com/repos/brahimgara34-blip/frontend/git/refs/heads/main /tmp/latest_frontend_commit.json
RUN if [ ! -f package.json ] || [ ! -d src ]; then \
      rm -rf /tmp/repo && \
      git clone https://github.com/brahimgara34-blip/frontend.git /tmp/repo && \
      cp -r /tmp/repo/. /app/ && \
      rm -rf /tmp/repo; \
    fi

RUN npm install
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
