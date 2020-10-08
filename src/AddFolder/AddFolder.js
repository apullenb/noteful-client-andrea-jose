import React, { Component } from 'react';
import NotesContext from '../NotesContext'

class AddFolder extends Component {
    static contextType = NotesContext;

    handleAddFolder = (event) => {
        console.log(this.context);
        event.preventDefault();
        let folder = this.context.folderNameDraft;
        console.log(folder);
        const newFolder = JSON.stringify( { name: folder });
        fetch(`http://localhost:9090/folders`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          }, body: newFolder
        })
    }


    render() { 
        return (
            <form className="registration" onSubmit={e => this.handleAddFolder(e)}>
                <h2>Create Folder Name</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                <label htmlFor="folder_name">Name *</label>
                <input
                    type="text"
                    className="registration__control"
                    name="folder_name"
                    id="folder_name"
                    onChange={e => this.context.updateFolderName(e.target.value)}
      
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

export default AddFolder;