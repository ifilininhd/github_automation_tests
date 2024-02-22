FROM mcr.microsoft.com/playwright:v1.41.2
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npx", "playwright", "test", "--project=chromium"]
