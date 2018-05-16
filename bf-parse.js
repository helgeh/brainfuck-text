#! /usr/bin/env node

const ncp = require('copy-paste');
const chalk = require('chalk');

const Brainfuck = require('brainfuck-node');

var input = '++++++++++[>+++++++>++++++++++>+++++++++++>++++>+++>++++++++++++<<<<<<-]>++.>+.>--..+++.>++++.>++.>-.<<<.+++.------.<-.>>>+.';
if (process.argv.length > 1) input = process.argv[2];

const bf = new Brainfuck();
const result = bf.execute(input);
console.log(chalk.cyan(result.output));
ncp.copy(result.output);