import React, { Component } from 'react';
import Track from './Track';

class Plane extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderTracks() {
        var trackList = this.props.trackList;
        var tracks = trackList.map((track) =>
            <Track
                key={track.id}
                trackId={track.id}
                source={track.trackFile}
                title={track.title}
            />
        );
        console.log(tracks);

        return tracks;
    }

    render() {
        var tracks = this.renderTracks();
        return(
            <div id="plane">
                {tracks}
            </div>
        );
    }

}

export default Plane;
