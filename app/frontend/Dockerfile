# Use nginx
FROM nginx:alpine

# Copy frontend files to nginx default folder
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]