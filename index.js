#!/usr/bin/env node
const program= require("commander");
const log = console.log;
const createPassword = require('./createPassword')
const chalk = require('chalk')
const clipboardy = require('clipboardy');
const savePassword = require('./savePassword');

program.version('1.0.0').description('Single Password Generator')

// program.command('generate').action(() =>{
//     console.log('generated');
// }).parse()

program
.option('-l, --length <number>','length of the password','8')
.option('-s, --save','save password to password.txt')
.option('-nn, --no-numbers','remove numbers')
.option('-ns, --no-symbols','remove symbols')
.parse()

const {length, save, numbers,symbols} =(program.opts());


//Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

//Save to File
if(save){
    savePassword(generatedPassword);
}

//Copy to clipboard
clipboardy.writeSync(generatedPassword);

//Output generated password
log(chalk.blue('Generated Password') + chalk.bold(generatedPassword))
log(chalk.yellow("Password copied to clipboard"))