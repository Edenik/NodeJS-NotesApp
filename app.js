const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')


// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})



// create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})


// create read command 
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note!')
    }
})

// create list command 
yargs.command({
    command:'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes!')
    }
})

// add, remove, read, list

console.log(yargs.argv)


// if(command === 'add'){
//     console.log('Adding note!');
// } else if(command === 'remove'){
//     console.log('Removing Note!');
// }