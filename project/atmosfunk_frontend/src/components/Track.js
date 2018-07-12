import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Draggable from 'react-draggable';

class Track extends Component {

    constructor(props) {
        super(props);
        this.state = {trackData: {}};
    }

    render() {
        const source = this.props.source;
        const title = this.props.title;
        return(
            <div className="track">
                <h3>{title}</h3>
                <ReactAudioPlayer
                    src={source}
                    autoPlay
                    controls
                />
            </div>
        );
    }

}

export default Track;
