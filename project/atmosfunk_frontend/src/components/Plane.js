import React, { Component } from 'react';
import PropTypes from "prop-types";
import Track from './Track';
import TrackSubmitForm from "./TrackSubmit/TrackSubmitForm";
import { Sprite, Stage } from "react-pixi-fiber";
import tyler from "../img/tyler.png";

class Plane extends Component {

    static propTypes = {
        trackList: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {trackPlaying: null};
    }

    componentDidMount() {
        this.preventMultiplePlayback();
    }

    /**
     * code Used from
     * https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript
     */
    preventMultiplePlayback() {
        document.addEventListener('play', function(e){
            var audios = document.getElementsByTagName('audio');
            for(var i = 0, len = audios.length; i < len;i++){
                if(audios[i] != e.target){
                    audios[i].pause();
                }
            }
        }, true);
    }

    updateTrackPlaying(track) {
        this.setState({trackPlaying: track});
    }

    renderTracks() {
        var trackList = this.props.trackList;
        var trackPlaying = this.state.trackPlaying;
        var tracks = trackList.map((track) =>
            <Track
                key={track.id}
                trackId={track.id}
                source={track.trackFile}
                title={track.title}
                trackPlaying={trackPlaying}
            />
        );
        console.log(tracks);

        return tracks;
    }


    tyler(props) {
        return (
            <Sprite texture={PIXI.Texture.fromImage(tyler)} {...props} />
        );
    }

    render() {
        var tracks = this.renderTracks();
        const endp = this.props.endpoint;
        // var tyler = this.tyler();

        return(
            <div id="plane">
                {tracks}
                <Stage width={800} height={600} options={{ backgroundColor: 0x10bb99 }}>
                    <this.tyler x={200} y={200} />
                </Stage>
            </div>

        );
    }

}

export default Plane;
