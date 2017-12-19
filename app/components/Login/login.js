import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./login.css";

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    if(localStorage.getItem('auth_token') ){
		this.props.history.push('/dashboard');    	
    }
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit (event) {
  	event.preventDefault();

    fetch("https://i2x-challenge.herokuapp.com/core/login/", {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    "email": this.state.email,
		    "password": this.state.password,
		  }) 
	}).then(data => {
		this.props.history.push('/dashboard');
		return data.json()
	}).then(data => {
		localStorage.setItem('auth_token', data.token);
	});
    
  }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}