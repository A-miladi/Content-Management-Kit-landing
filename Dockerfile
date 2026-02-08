# Use Node.js v20 as the base image
FROM node:20-alpine
# Install git
RUN apk add --no-cache git



# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install 


# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
