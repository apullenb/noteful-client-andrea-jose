import React, { Component } from 'react';
import NotesContext from '../NotesContext'

class AddNote extends Component {
    static contextType = NotesContext;

    handleAddNewNote = (event) => {
        console.log(this.context);
        event.preventDefault();
        let note = this.context.noteNameDraft;
        console.log(note);
        let content = this.context.noteContentDraft;
        console.log(content);
        const newNote = JSON.stringify( { name: note, content: content });
        fetch(`http://localhost:9090/notes`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          }, body: newNote
        })
    }


    render() { 
        return (
            <form className="registration" onSubmit={e => this.handleAddNewNote(e)}>
                <h2>Create Note Name</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                    type="text"
                    className="registration__control"
                    name="name"
                    id="name"
                    onChange={e => this.context.updateNoteName(e.target.value)}
                />
                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                </div>
                <div className="form-group">
                <label htmlFor="content">Description *</label>
                <input
                    type="textarea"
                    className="registration__control"
                    name="content"
                    id="content"
                    onChange={e => this.context.updateNoteContent(e.target.value)}
                />
                {/* {this.state.name.touched && <ValidationError message={nameError} />} */}
                </div>
                

                <div className="registration__button__group">
                <button
                    type="submit"
                    className="registration__button"
                    // disabled={
                    // this.validateName()
                    // }
                >
                    Save
                </button>
                </div>
            </form>

        )
    }
}

export default AddNote;