# Use Node.js 14 as the parent image for building
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Node.js image to serve the app
FROM node:14-alpine

# Install the serve package globally
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/build .

# Expose the port for serving the application
EXPOSE 3000

# Health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000 || exit 1

# Command to run the application
CMD ["serve", "-s", ".", "-l", "3000"]
