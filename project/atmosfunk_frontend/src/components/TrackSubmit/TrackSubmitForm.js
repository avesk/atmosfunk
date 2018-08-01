import React, { Component } from 'react';
import AudioInput from './AudioInput';
import TextInput from './TextInput';
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
        trackData.append('trackFile', this.state.trackFile);
        trackData.append('title', this.state.title);

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
                        <TextInput name="title" label="Title" inputChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <AudioInput name="trackFile" label="Track" inputChange={this.handleFileChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default TrackSubmitForm;
