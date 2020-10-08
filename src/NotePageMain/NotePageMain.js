import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NotesContext from '../NotesContext'
import { findNote } from '../notes-helpers';
import { withRouter } from 'react-router-dom'

class NotePageMain extends React.Component {
  render() {
    return (
      <NotesContext.Consumer>
        {(context) => {
          if (context.notes.length === 0) return;
          const { noteId } = this.props.match.params;
          const note = findNote(context.notes, noteId);
          return (
            <section className='NotePageMain'>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
              <div className='NotePageMain__content'>
                {note.content.split(/\n \r|\n/).map((para, i) =>
                  <p key={i}>{para}</p>
                )}
              </div>
            </section>
          )
        }}
      </NotesContext.Consumer>
    )
  }
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}

export default withRouter(NotePageMain)
