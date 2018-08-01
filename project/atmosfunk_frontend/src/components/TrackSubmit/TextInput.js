import React, { Component } from 'react';

class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {trackFile: null};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.props.inputChange(this.track);
        this.props.inputChange(event);
    }

    render() {
        const label = this.props.label;
        const name = this.props.name;
        return(
            <div className="text-input">
                <label>{label}:</label>
                <input name={name} type="text" onChange={this.handleChange} />
            </div>
        );
    }

}

export default TextInput;
