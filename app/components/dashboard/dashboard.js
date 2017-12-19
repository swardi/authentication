//Dashboard component

import React, { Component } from "react";
//import "./dashboard.css";
import { Button, FormControl, ControlLabel } from "react-bootstrap";
//import "./login.css";

export default class Dashboard extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      recording_list: []
    };

    fetch("https://i2x-challenge.herokuapp.com/ai/recording/list/", {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'Authorization': 'JWT '+ localStorage.getItem('auth_token')
		  } 
	}).then(data => {
		return data.json()
	}).then(data => {
		this.state.recording_list = data.results;
	});
    

  }

  render() {
  	
    return (
   
        <div > 
          <p>This is the dashboard</p>
        </div>
     
    );
  }
}