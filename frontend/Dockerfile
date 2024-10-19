FROM node:14

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy public directory
COPY public ./public

# Copy the rest of the frontend code
COPY src ./src

# Copy other necessary files
COPY .env* ./
COPY tsconfig*.json ./

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app using serve
CMD ["npm", "run", "serve"]