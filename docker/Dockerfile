# Use official Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements first
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files
COPY . .

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "firstTODO.py"]