import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'
import NotesContext from '../NotesContext'
import { withRouter } from 'react-router-dom'
import {findNote, findFolder} from '../notes-helpers';

class NotePageNav extends React.Component {
  findFolderFromNoteId = function(notes, folders) {
    const {noteId} = this.props.match.params;
    const note = findNote(notes, noteId) || {}; 
    return findFolder(folders, note.folderId);
  } 

render() { 
  return (
    <NotesContext.Consumer>
     {(context) => {
       const folder = this.findFolderFromNoteId(context.notes, context.folders)
       return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {folder && (
          <h3 className='NotePageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
      )}}
    </NotesContext.Consumer>
    )
  }
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}

export default withRouter(NotePageNav);