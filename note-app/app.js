const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b',
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

const command = process.argv[2];

if (command == 'add') {
    let note = notes.addNote(argv.title, argv.body);
    note == undefined ? console.log(argv.title, " already exist.") : console.log(argv.title, " created.");
} else if (command == 'list') {
    let allNotes = notes.getAll();
    allNotes.forEach(note => notes.logNote(note));
} else if (command == 'read') {
    let note = notes.getNote(argv.title);
    debugger;
    let message = note == undefined ? 'Note not found' : `Note: ${note.body}`
    console.log(message);
} else if (command == 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('Command note recognized');
}
