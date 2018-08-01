import React, { Component } from 'react';
const axios = require('axios');

class TrackSubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', trackFile: null, uploadStatus: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleFileChange(event) {
        var file = event.target.files[0];
        this.setState({
            trackFile: file,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const action = this.props.action;
        const trackData = new FormData();
        console.log(this.track.files[0]);
        trackData.append('trackFile', this.track.files[0]);
        trackData.append('title', this.title.value);

        console.log('Making a call to: ' + this.props.action);
        console.log("With:");
        console.log(trackData);
        console.log(JSON.stringify(trackData));

        axios.post(action, trackData)
        .then(function (response) {
            console.log(response);
            // this.setState({uploadStatus: true });
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    post(url, data) {
        return fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div id="TrackSubmitForm-wrapper">
                <h2>Submit Track:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                          Title:
                          <input name="title" type="text" ref={(ref) => { this.title = ref; }} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Track:
                            <input name="trackFile" type="file" accept="audio/*" ref={(ref) => { this.track = ref; }} onChange={this.handleFileChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default TrackSubmitForm;
