import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import NotesContext from '../NotesContext'

//handle delete

class Note extends React.Component {
  handleDeleteRequest = (id, callback) => {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(() =>
      {callback(id)
      if (this.props.match.params.hasOwnProperty('noteId'))
      this.props.history.push('/')})
    .catch(e => console.log(e.message))
  }

  render() {
    return (
      <NotesContext.Consumer>
        {(context) => {
          return (
            <div className='Note'>
              <h2 className='Note__title'>
                <Link to={`/note/${this.props.id}`}>
                  {this.props.name}
                </Link>
              </h2>
              <button
                className='Note__delete' type='button'
                onClick={() => 
                  this.handleDeleteRequest(this.props.id, context.deleteNote)}
              >
                <FontAwesomeIcon icon='trash-alt' />
                {' '}
          remove
        </button>
              <div className='Note__dates'>
                <div className='Note__dates-modified'>
                  Modified
                  {' '}
                  <span className='Date'>
                    {format(this.props.modified, 'Do MMM YYYY')}
                  </span>
                </div>
              </div>
            </div>
          )
        }}
      </NotesContext.Consumer>
    )
  }
}

export default withRouter(Note);
