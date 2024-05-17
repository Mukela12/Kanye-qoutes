# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the production version of your app
RUN npm run build

# Install serve to run your application
RUN npm install -g serve

# Command to run your app
CMD ["serve", "-s", "build", "-l", "5000"]

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 5000
