# Autotests

### [Playwright](https://playwright.dev/)

Before running the automated tests, it is necessary to fill out the .env file.
The parameters for filling can be taken from the .env.example file.

USERNAME - your GitHub login
PASSWORD - your GitHub account password

### Docker Launch:
You must have Docker installed.

Then you need to build the image using the command
```bash
docker build -t playwright-tests .
```

And finally, run the tests in the container using the command
```bash
docker run playwright-tests
```

### Local Launch:
For local launch, you need to install Playwright using the command
```bash
npm init playwright@latest
```

Then download all the necessary npm packages using the command
```bash
npm install
```

And after that, you can use commands to run tests:
```bash
npm run test - to run tests on 3 browsers
npm run test-chromium - to run tests in Google Chrome
npm run test-chromium-html-report - to run tests in Google Chrome with generating an HTML report
```
