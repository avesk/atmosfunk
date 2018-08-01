import React, { Component } from 'react';
import DataProvider from "./DataProvider";
import Plane from "./Plane";
import TrackSubmitForm from "./TrackSubmit/TrackSubmitForm";

class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.trackSubmitted = this.trackSubmitted.bind(this);
    }

    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    }

    componentDidMount() {
        this.getTrackData();
    }

    getTrackData() {
        console.log("Fetching tracks...");
        fetch(this.props.endpoint)
        .then(response => {
            if(response.status !== 200) {
                return this.setState({placeholder: "Something went wrong"});
            }
            return response.json();
        })
        .then(data => this.setState({data: data, loaded: true}));
    }

    trackSubmitted() {
        this.getTrackData();
    }

    render() {
        const {data, loaded, placeholder} = this.state; // very nice line
        const endp = this.props.endpoint;

        return loaded ?
            (<div id="app-container">
                <TrackSubmitForm trackSubmitted={this.trackSubmitted} action={endp} />
                <Plane endpoint={endp} trackList={data} />
             </div>
            ) : <p>{placeholder}</p>;
    }

}

export default AppContainer;
