import React, { Component } from "react";
import ReactDOM from "react-dom";
import RecordingItem from "./recordingItem";
import "./dashboard.css";

export default class Dashboard extends Component {
  
  constructor(props) {
    super(props);
  }

  handleLogout(event){
  	localStorage.removeItem("auth_token");
  	this.props.history.push('/');  
  }

  componentDidMount() {
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
		let recording_list = data.results;
		var recordingItemsList = recording_list.map(function(recordingItem, i) {
            return (
                  <RecordingItem item={recordingItem} key={i}/>
                
            );
        });

        ReactDOM.render(<div> {recordingItemsList} </div>, document.getElementById("dashboardList"));
	}).catch(error=>{
		ReactDOM.render(<div> Unable to load data.</div>, document.getElementById("dashboardList"));
	});
    

  }

  render() {
    return (
   
        <div className="container">
	        <div className="row listing-boxs">
	        	<div className="logout" onClick={this.handleLogout.bind(this)}> Logout </div>
	            <div className="col-md-12">
	                <div className="row" id="dashboardList">
	                </div>
	            </div>
	        </div>
        </div>
    );
  }
}