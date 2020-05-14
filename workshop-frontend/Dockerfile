FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# FROM nginx:alpine

# COPY --from=builder /app/build/* /usr/share/nginx/html/