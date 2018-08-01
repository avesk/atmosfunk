import React, { Component } from 'react';

class AudioInput extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.inputChange(event);
    }

    render() {
        const label = this.props.label;
        const name = this.props.name;
        return(
            <div className="audio-input">
                <label>{label}:</label>
                <input name={name} type="file" accept="audio/*" onChange={this.handleChange} />
            </div>
        );
    }

}

export default AudioInput;
