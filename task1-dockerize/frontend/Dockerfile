### Frontend Dockerfile - multi-stage build (build with Node, serve with NGINX)
FROM node:18-alpine AS builder
WORKDIR /app

# install deps
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# pass API URL at build-time; Vite reads VITE_ prefixed envs at build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# copy source and build
COPY . .
RUN npm run build

### Production image: NGINX
FROM nginx:stable-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
