//  Creating files using fs (File System) with NodeJS
//  https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefilesync_file_data_options

//import library fs
const fs = require('fs')

fs.writeFileSync("notes.txt", "Hey, this file was created by NodeJs")