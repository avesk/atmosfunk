import React, { Component } from 'react';
import DataPoster from './DataPoster';

class TrackSubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', trackFile: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            title: event.target.value,
            trackFile: event.target.files ? event.target.files[0] : null,
        });
    }

    handleSubmit(event) {
        const formData = this.state;
        <DataPoster endpoint={this.props.action} data={formData}/>
        // alert('A name was submitted: ' + this.state.value);
        // alert('A file was submitted: ' + this.state.trackFile);
        event.preventDefault();
    }

    render() {
        return (
            <div id="TrackSubmitForm-wrapper">
                <h2>Submit Track:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Track:
                        <input type="file" accept="audio/*" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default TrackSubmitForm;
