# Stage 1: Build dependencies
FROM python:3.9-slim AS builder

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --prefix=/install -r requirements.txt


# Stage 2: Final image
FROM python:3.9-slim

WORKDIR /app

# Copy only installed packages
COPY --from=builder /install /usr/local

# Copy app code
COPY . .

EXPOSE 5000

CMD ["python", "firstTODO.py"]