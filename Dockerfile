# Use an official Node.js runtime as the base image
FROM node:18 as build

WORKDIR /app

ARG NEXT_PUBLIC_STRAPI_JWT

COPY package*.json ./
RUN npm install

COPY . .

RUN NEXT_PUBLIC_STRAPI_JWT=${NEXT_PUBLIC_STRAPI_JWT}  npm run build

# Use a smaller Nginx image to serve the static files
FROM nginx:alpine

# Copy the static files from the build stage to the Nginx container
COPY --from=build /app/out /usr/share/nginx/html

# Copy your custom nginx.conf to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
