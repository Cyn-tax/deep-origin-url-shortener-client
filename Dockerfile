# Use an official Node.js image as a base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
