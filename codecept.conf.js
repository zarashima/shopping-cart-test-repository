require('import-export');

exports.config = {
  tests: './tests/common/*_test.js',
  output: './output',
  mocha: {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      }
      ,
      "mochawesome": {
        "stdout": "./output/console.log",
        "options": {
          "reportDir": "./output",
          "reportFilename": "report"
        },
        "mocha-junit-reporter": {
          "stdout": "./output/console.log",
          "options": {
            "mochaFile": "./output/result.xml"
          },
          "attachments": true //add screenshot for a failed test
        }
      }
    }
  },

  helpers: {
    WebDriver: {
      url: 'https://another-nodejs-shopping-cart.herokuapp.com/',
      keepCookies: true,
      browser: "chrome",
      desiredCapabilities: {
        chromeOptions: {
          args: [ '--disable-extensions', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        }
      },
      windowSize: "1440x700",
      smartWait: 5000,
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    },
    Mochawesome: {
      "uniqueScreenshotNames": "true"
    },
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
  },
  include: {
    homePage: './pages/HomePage.js',
    signUpPage: './pages/SignInPage.js',
  },
  bootstrap: null,
  name: 'shopping-cart',
};