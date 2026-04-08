FROM python:3.9-slim

WORKDIR /app

# Copy requirements first (for caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY . .

# Expose Flask port
EXPOSE 5000

# Run the app
CMD ["python", "firstTODO.py"]