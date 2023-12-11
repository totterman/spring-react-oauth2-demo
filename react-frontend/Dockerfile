# Fetch the lates node image of alpine linux
FROM node:18-alpine AS builder

# Setup working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent

# Copy all project files
COPY . ./

# Build app
RUN npm run build


# Fetch latest nginx image
FROM nginx:stable-alpine

# Copy assets from builder
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html

# Run
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]