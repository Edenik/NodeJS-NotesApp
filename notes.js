const chalk = require('chalk');
const fs = require('fs');

const getNotes =() =>{
    return notes;
}

const addNote= (title, body) =>{
 const notes = loadNotes();
 const duplicateNotes = notes.filter(note => note.title === title);
 
 if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body,
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
 } else {
    console.log(chalk.red.inverse('Note title taken'))
 }
}

const removeNote =(title)=>{
    const notes = loadNotes();
    const notesFiltered = notes.filter(note => note.title != title);

    if(notes.length > notesFiltered.length){
        console.log(chalk.green.inverse(`Note ${title} removed!`));
        saveNotes(notesFiltered);
    } else {
        // no note to delete
        console.log(chalk.red.inverse(`There is no note with the title: ${title}`));
    }

}

const saveNotes = (notes)=> {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('data.json', dataJson)
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e){
        return []
    }

}

module.exports ={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
}