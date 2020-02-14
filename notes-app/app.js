/*  This app allow us to create, delete and read all the notes  */

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
const yargs = require('yargs')

//Set version of the app
yargs.version('1.0.0')

//[Add] command
yargs.command({
    command: 'add',                     //Command name
    describe: 'Add a new note',         //Description of the command
    builder: {                          //Options
        title:{
            describe: 'Note title',
            demandOption: true,         //Required option
            type: 'string'              //Validate that must be a string
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{                     //Funtion that will execute that command
        console.log(chalk.yellow('Adding a new note!!!'))
        console.log(chalk.blueBright('Title: ' + argv.title))
        console.log(chalk.green('Note: ' + argv.body))
        console.log(chalk.green.inverse('Success!!'))
    }
})

//[Remove] command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () =>{
        console.log('Removing a note!')
    }
})

//[List all] command
yargs.command({
    command: 'list',
    describe: 'List all the notes available',
    handler: () =>{
        console.log('Here is all your notes!')
    }
})

//[Read] command
yargs.command({
    command: 'read',
    describe: 'Read an indivual note by index',
    handler: () =>{ 
        console.log('Reading a note!')
    }
})

//Get command from terminal as an argument
//const cmd = process.argv[2]
//console.log(cmd)
//Get args vector with yargs
//console.log(yargs.argv)
yargs.parse()
