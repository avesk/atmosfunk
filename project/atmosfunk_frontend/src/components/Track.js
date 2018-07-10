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
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="track">
                    <h3>{title}</h3>
                    <ReactAudioPlayer
                        src={source}
                        autoPlay
                        controls
                    />
                </div>
            </Draggable>
        );
    }

}

export default Track;
