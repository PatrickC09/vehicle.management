#stage 1
FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --aot --output-hashing=all --configuration=production

#stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/web-portal /usr/share/nginx/html