//imports
//  Creating files using fs (File System) with NodeJS
//  https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options
const fs = require('fs')
//notes.js
const getNotes = require('./notes.js')
//validator.js A library of string validators and sanitizers.
const validator = require('validator')
//chalk.js Terminal string styling done right
const chalk = require('chalk')

//Get command from terminal as an argument
const cmd = process.argv[2]
console.log(cmd)

let msgCmd = ""

if(cmd === 'add'){
    msgCmd = "Adding note!"
}else if(cmd === 'delete'){
    msgCmd = "Deleting note!"
}





