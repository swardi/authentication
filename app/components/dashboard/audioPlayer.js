import React, { Component } from "react";

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props);
  }

  
  render () {
    return <audio controls className="player" preload="false">
      <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
    </audio>
  }

}