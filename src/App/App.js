import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import './App.css';
import NotesContext from '../NotesContext'

import AddFolder from '../AddFolder/AddFolder'
import AddNote from '../AddNote/AddNote'

//1. You will add two forms for POSTing new folders and new Notes to the server
//2. You will also add error boundaries at appropriate places in the structure
//3. Finally you will refactor the components to use PropTypes to validate the props

class App extends Component {
    state = {
        notes: [],
        folders: [],
        noteNameDraft: '',
        noteContentDraft: '',
        folderNameDraft: ''
    };



    notefulFetch = (url, options) => {
        return fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(resJson => {
                return resJson;
            })
            .catch(e => console.log(e.message));
    }

    componentDidMount() {
        const baseURL = 'http://localhost:9090'
        this.notefulFetch(baseURL + '/folders')
            .then(data => {
                this.setState({ folders: data });
            })
            .then(() => this.notefulFetch(baseURL + '/notes'))
            .then(data => {
                this.setState({ notes: data });
            })
    }

    renderNavRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav} />
                ))}
                <Route path="/note/:noteId" component={NotePageNav} />
                <Route path="/add-folder" component={NotePageNav} />
                <Route path="/add-note" component={NotePageNav} />
            </>
        );
    }

    renderMainRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListMain} />
                ))}
                <Route
                    path="/note/:noteId"
                    component={NotePageMain} />
            </>
        );
    }

    deleteNote = (id) => {
        const notes = this.state.notes.filter(note => note.id !== id);

        this.setState({
           notes
        }) 
    }

    handleAddNewNote = (noteNameDraft, noteContentDraft) => {
        const noteName = this.state.noteNameDraft;
        const noteContent = this.state.noteContentDraft;

        // this.setState({
        //     noteNameDraft: noteName,
        //     noteContentDraft: noteContent
        // })
        // console.log(noteName);
        // console.log(noteContent);
    }

    handleAddFolder = (folderNameDraft) => {
        const folderName = this.state.folderNameDraft;
    }

    updateNoteName = (name) => {
        this.setState({
            noteNameDraft: name,
        });
        // console.log(name);
    }

    updateNoteContent = (name) => {
        this.setState({
            noteContentDraft: name,
        });
        // console.log(name);
    }

    updateFolderName = (name) => {
        this.setState({
            folderNameDraft: name,
        });
        // console.log(name);
    }

    render() {
        return (
            <NotesContext.Provider
                value={{ notes: this.state.notes, folders: this.state.folders, 
                            noteNameDraft: this.state.noteNameDraft, noteContentDraft: this.state.noteContentDraft, folderNameDraft: this.state.folderNameDraft,
                            deleteNote: this.deleteNote, updateNoteName: this.updateNoteName, updateNoteContent: this.updateNoteContent, 
                            updateFolderName: this.updateFolderName, handleAddFolder: this.handleAddNewNote }}>
                <div className="App">
                    <nav className="App__nav">{this.renderNavRoutes()}</nav>
                    <header className="App__header">
                        <h1>
                            <Link to="/">Noteful</Link>{' '}
                            <FontAwesomeIcon icon="check-double" />
                        </h1>
                    </header>
                    <main className="App__main">{this.renderMainRoutes()}</main>
                    <AddFolder />
                    <AddNote />
                </div>
            </NotesContext.Provider>
        );
    }
}

export default App;
