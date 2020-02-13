//  Creating files using fs (File System) with NodeJS
//  https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options

// import library fs
const fs = require('fs')
//import custom script
const sum = require('./utils.js')
//import notes.js
const getNotes = require('./notes.js')
//import validator.js
const validator = require('validator')
//import chalk
const chalk = require('chalk')

// Create a file in this case note.txt
fs.writeFileSync("notes.txt", "Hey, this file was created by NodeJs")

// Appending text to a file 
fs.appendFileSync("notes.txt", "\nThis text was appended using appendFileSync method")

const total = sum(1,5)
const allNotes = getNotes()
const email = "devjose@github.com"

console.log(total)
console.log(allNotes)
console.log(validator.isEmail(email))

// usage of chalk.js
console.log(chalk.green.bold.inverse("Success!"))
console.log(chalk.red.bold.inverse("Failed!"))

//argv argument vector
console.log(process.argv)




