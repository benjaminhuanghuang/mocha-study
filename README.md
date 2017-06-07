# Run
    $ mocha test


# ES6 Test
    $ npm install babel-core babel-preset-es2015 --save-dev
    add .babelrc
    $ mocha --compilers js:babel-core/register
    --compilers indicate the transpile 
        use module babel-core/register to process .js file
    