const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes.json');
        return JSON.parse(notesString);
    } catch (err) {
        return [];
    }
}

const saveNotes = notes => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const logNote = note => {
    console.log('_____________________');
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let dublicateNotes = notes.filter(note => note.title == title);

    if (dublicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
}

const getNote = title => {
    let notes = fetchNotes();
    let foundNote = notes.filter(note => note.title == title);
    return foundNote[0];
}

const removeNote = title => {
    let notes = fetchNotes();
    let newNotes = notes.filter(note => note.title != title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};