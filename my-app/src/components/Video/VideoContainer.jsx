import React from "react";
import "./styles/video.css";

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.vidRef = React.createRef();
    this.state = {
      isPlaying: false,
    };
  }
  render() {
    return (
      <div>
        <video
          className="video1"
          ref={this.vidRef}
          src={covidVideo}
          onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}
        />
        <button
          onClick={!this.state.isPlaying ? this.playVideo : this.stopVideo}
          className="btnPlay"
          id="p2"
        >
          <i className="fas fa-play fa-2x" />
        </button>
      </div>
    );
  }
  playVideo = () => {
    this.vidRef.current.play();
    this.setState({ isPlaying: true });
    document.getElementById("p2").style.display = "none";
  };
  stopVideo = () => {
    this.vidRef.current.pause();
    this.setState({ isPlaying: false });
    document.getElementById("p2").style.display = "block";
  };
}
