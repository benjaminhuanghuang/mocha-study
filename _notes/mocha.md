# Run tests in folder "test"
    $ mocha
    $ mocha "server-test/**/*.js"

# Run test file
    $ mocha main_test.js

# Run tests by using npm
    "scripts": {
        "test": "mocha",
        "test-es6": "mocha 'test-es6/**/*.js' --compilers js:babel-core/register"
    },

    $ npm run test