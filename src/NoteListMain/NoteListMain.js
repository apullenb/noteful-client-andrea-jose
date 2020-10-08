import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import NotesContext from '../NotesContext'
import { withRouter } from 'react-router-dom'
import { getNotesForFolder } from '../notes-helpers';

class NoteListMain extends React.Component {
  render() {
    return (
      <NotesContext.Consumer>
        {(context) => {
          const { folderId } = this.props.match.params;
          const notes = getNotesForFolder(
            context.notes,
            folderId
          );
          return (
            <section className='NoteListMain'>
              <ul>
                {notes.map(note =>
                  <li key={note.id}>
                    <Note
                      id={note.id}
                      name={note.name}
                      modified={note.modified}
                    />
                  </li>
                )}
              </ul>
              <div className='NoteListMain__button-container'>
                <CircleButton
                  tag={Link}
                  to='/add-note'
                  type='button'
                  className='NoteListMain__add-note-button'
                >
                  <FontAwesomeIcon icon='plus' />
                  <br />
            Note
          </CircleButton>
              </div>
            </section>
          )
        }}
      </NotesContext.Consumer>
    )
  }
}

NoteListMain.defaultProps = {
  notes: [],
}

export default withRouter(NoteListMain);