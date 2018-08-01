import React, { Component } from 'react';
import PropTypes from "prop-types";
import Track from './Track';
import TrackSubmitForm from "./TrackSubmit/TrackSubmitForm";

class Plane extends Component {

    static propTypes = {
        trackList: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};

        this.handleTrackSubmit = this.handleTrackSubmit.bind(this);
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

    handleTrackSubmit() {

    }

    render() {
        var tracks = this.renderTracks();
        const endp = this.props.endpoint;

        return(
            <div id="plane">
                {tracks}
            </div>
        );
    }

}

export default Plane;
