# Base Image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (Cache optimieren)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build Strapi (nur nötig, wenn du production mode willst)
RUN npm run build

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
