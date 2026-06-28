FROM node:22-slim

RUN rm -f /etc/apt/sources.list.d/debian.sources \
 && cat > /etc/apt/sources.list <<'EOF'
# Debian Bookworm main repository via HTTP
deb http://deb.debian.org/debian bookworm main contrib non-free
deb http://deb.debian.org/debian bookworm-updates main contrib non-free
deb http://security.debian.org/debian-security bookworm-security main contrib non-free
EOF
RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates \
 && rm -rf /var/lib/apt/lists/*

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

ENV NPM_CONFIG_FETCH_RETRIES=20
ENV NPM_CONFIG_FETCH_RETRY_FACTOR=2
ENV NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=10000
ENV NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=300000
ENV NPM_CONFIG_FETCH_TIMEOUT=600000

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile --config.ignore-scripts=true \
  --registry=https://registry.npmjs.org/ \
  --fetch-retries=20 \
  --fetch-retry-factor=2 \
  --fetch-retry-mintimeout=10000 \
  --fetch-retry-maxtimeout=300000 \
  --fetch-timeout=600000 \
 && pnpm rebuild --recursive