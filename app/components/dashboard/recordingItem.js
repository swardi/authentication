import React, { Component } from "react";
import StarRating from "./starRating";
import AudioPlayer from "./audioPlayer";

export default class RecordingItem extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
   var item = this.props.item
    return (
          <div className="col-md-4 pro-box">
              <div className="info">
                  <p className="slimscrollbar">
                      {item.final_script}
                  </p>
                   <span><AudioPlayer sourceUrl={item.url} /></span>
                  <span><StarRating rating={item.rating} /></span>
                  <h6>{Math.ceil(item.duration/60)} minutes</h6>
                  <ul>
                      <li> Created on: {(new Date(item.created)).toString()}
                      </li>
                      
                  </ul>
              </div>
          </div>     
    );
  }
}