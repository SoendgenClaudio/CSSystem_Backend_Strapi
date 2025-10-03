# Base Image
FROM node:20-alpine

WORKDIR /app

# Copy package files first (bessere Caching-Schichten)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build Strapi
RUN npm run build

# Expose port
EXPOSE 1337

# Start Strapi direkt
CMD ["npm", "run", "start"]
