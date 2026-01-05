# Deployment Guide - it-tools

**Generated:** 2026-01-02

## Deployment Options

### 1. Docker Deployment

#### From Docker Hub

```bash
docker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest
```

#### From GitHub Packages

```bash
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/corentinth/it-tools:latest
```

**Access:** http://localhost:8080

### 2. Third-Party Platforms

| Platform | Link |
|----------|------|
| Cloudron | [it-tools.cloudron.io](https://www.cloudron.io/store/tech.ittools.cloudron.html) |
| Tipi | [runtipi.io docs](https://www.runtipi.io/docs/apps-available) |
| Unraid | Available via Unraid Apps |

### 3. Vercel (Production)

The main site is deployed on Vercel with continuous deployment.

## CI/CD Pipeline

### GitHub Actions Workflows

Located in `.github/workflows/`:

| Workflow | Purpose |
|----------|---------|
| `ci.yml` | Continuous integration (tests, linting, type check) |
| `releases.yml` | Automated release workflow |
| `docker-nightly-release.yml` | Daily Docker image builds |
| `e2e-tests.yml` | End-to-end test automation |

### Build Process

1. **Type Check:** `vue-tsc --noEmit`
2. **Lint:** ESLint with auto-fix
3. **Tests:** Vitest (unit) + Playwright (E2E)
4. **Build:** `vite build` (outputs to `dist/`)
5. **Deploy:** Automatic on merge to main branch

## Infrastructure Requirements

### Docker Environment

| Requirement | Value |
|-------------|-------|
| Port | 8080 (default) |
| Restart Policy | `unless-stopped` |
| Image Size | ~100MB |
| Persistence | Not required (stateless app) |

### Production Build

- **Output Directory:** `dist/`
- **Target:** ESNext
- **PWA:** Enabled (service worker auto-update)
- **Base URL:** Configurable via `BASE_URL` environment variable

## Environment Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_URL` | Base URL for deployment | `/` |
| `npm_package_version` | Injected at build time | from package.json |

### Vite Config

- **Base URL:** `${process.env.BASE_URL ?? '/'}`
- **Build Target:** ESNext
- **PWA Strategy:** generateSW (auto-update)

## Nginx Configuration

```nginx
# nginx.conf (included in repo)
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Dockerfile Summary

```dockerfile
# Multi-stage build
Stage 1: Build (node:18-alpine)
- Install dependencies (pnpm install)
- Build application (pnpm build)

Stage 2: Serve (nginx:alpine)
- Copy built files to nginx
- Expose port 80
- Use nginx.conf
```

## Netlify Deployment

**Config:** `netlify.toml`

```toml
# Build command and publish directory configured
# Automatic deployment from Git
```

## Deployment Checklist

- [ ] Run tests: `pnpm test`
- [ ] Type check: `pnpm typecheck`
- [ ] Lint: `pnpm lint`
- [ ] Build: `pnpm build`
- [ ] Test production build: `pnpm preview`
- [ ] Deploy to platform (Vercel/Docker/Netlify)

## Monitoring

### Health Checks

- **Main Site:** https://it-tools.tech
- **Docker Hub:** https://hub.docker.com/r/corentinth/it-tools
- **GitHub Packages:** https://github.com/CorentinTh/it-tools/pkgs/container/it-tools

### Release Strategy

- **Releases:** Automated via GitHub Actions
- **Versioning:** Semantic versioning
- **Changelog:** Maintained in `CHANGELOG.md`
- **Nightly Builds:** Docker images built daily

## Performance Considerations

- **Bundle Size:** Optimized via Vite
- **PWA Support:** Service worker for offline capability
- **CDN:** Static assets served via CDN (Vercel/Netlify)
- **Browser Support:** Modern browsers (ESNext target)
