FROM mcr.microsoft.com/playwright:v1.41.2
COPY . /app
WORKDIR /app
RUN npm install
WORKDIR /app/tests
CMD ["npx", "playwright", "test"]
