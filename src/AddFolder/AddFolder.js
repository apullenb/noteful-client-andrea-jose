import React, { Component } from 'react';

class AddFolder extends Component {
    state = {
        notes: [],
        folders: []
    };


    // <form className="registration" onSubmit={e => this.handleAdd(e)}>
    //     <h2>Register</h2>
    //     <div className="registration__hint">* required field</div>
    //     <div className="form-group">
    //       <label htmlFor="name">Name *</label>
    //       <input
    //         type="text"
    //         className="registration__control"
    //         name="name"
    //         id="name"
    //         onChange={e => this.updateName(e.target.value)}
    //       />
    //       {this.state.name.touched && <ValidationError message={nameError} />}
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password *</label>
    //       <input
    //         type="password"
    //         className="registration__control"
    //         name="password"
    //         id="password"
    //         onChange={e => this.updatePassword(e.target.value)}
    //       />
    //       <div className="registration__hint">
    //         6 to 72 characters, must include a number
    //       </div>
    //       {this.state.password.touched && (
    //         <ValidationError message={passwordError} />
    //       )}
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="repeatPassword">Repeat Password *</label>
    //       <input
    //         type="password"
    //         className="registration__control"
    //         name="repeatPassword"
    //         id="repeatPassword"
    //         onChange={e => this.updateRepeatPassword(e.target.value)}
    //       />
    //       {this.state.repeatPassword.touched && (
    //         <ValidationError message={repeatPasswordError} />
    //       )}
    //     </div>

    //     <div className="registration__button__group">
    //       <button type="reset" className="registration__button">
    //         Cancel
    //       </button>
    //       <button
    //         type="submit"
    //         className="registration__button"
    //         disabled={
    //           this.validateName() ||
    //           this.validatePassword() ||
    //           this.validateRepeatPassword()
    //         }
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </form>




}

export default AddFolder;