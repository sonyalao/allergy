import React from "react";
import {Redirect} from "react-router-dom"

class CreateAccount extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.test}
      <text>Allergy App</text>
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" name="username"></input>
      </div>
  
      <div>
        <label for="pass">Password: </label>
        <input type="password" id="pass" name="password"
             minlength="1" required></input>
      </div>
  
      <button>Create Account</button>
      </div>
    );
  }
}

export default CreateAccount;
