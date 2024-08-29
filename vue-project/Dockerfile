# Use the official Node.js image as the base
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm ci to ensure a clean and reproducible install
RUN npm ci

# Copy the rest of the application code into the working directory
COPY . .

# Ensure that any previous build artifacts are removed
RUN rm -rf dist

# Run the Vue.js build command to create a clean production build
RUN npm run build

# Expose the port that the application will run on
EXPOSE 4173

# Serve the production build (optional step for production use)
# You can serve the built files using a simple HTTP server
# RUN npm install -g http-server
# CMD ["http-server", "dist"]

# Alternatively, run the development server (if not a production environment)
CMD ["npm", "run", "serve"]