const chalk = require('chalk');
const fs = require('fs');



const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesFiltered = notes.filter(note => note.title != title);

    if (notes.length > notesFiltered.length) {
        console.log(chalk.green.inverse(`Note ${title} removed!`));
        saveNotes(notesFiltered);
    } else {
        // no note to delete
        console.log(chalk.red.inverse(`There is no note with the title: ${title}`));
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('data.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes:'));

    notes.forEach(note => {
        console.log(chalk.white.inverse(`Title: ${note.title}`));
    });
}

const readNote= (title) => {
    const notes = loadNotes();
    const noteFiltered = notes.find(note => note.title === title);
 
    if(noteFiltered){
        console.log(chalk.white.inverse(`Title: ${noteFiltered.title}, Body: ${noteFiltered.body}`));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }

}
module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote:readNote,
}