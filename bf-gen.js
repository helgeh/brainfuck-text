#! /usr/bin/env node

const ncp = require('copy-paste');
const chalk = require('chalk');

const txtToBf = require('./txt2bf');

var input = 'Hello, world!';
if (process.argv.length > 1) input = process.argv[2];

const result = txtToBf(input);
console.log(chalk.cyan(result));
ncp.copy(result);