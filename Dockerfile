# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your Strapi project files
COPY . .

# Build the Strapi admin panel
RUN yarn build

# Expose the default Strapi port
EXPOSE 1337

# Start the Strapi server
CMD ["yarn", "start"]