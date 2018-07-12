import React, { Component } from "react";
import PropTypes from "prop-types";

class DataPoster extends Component {

    static propTypes = {
        endpoint: PropTypes.string.isRequired,
    };

    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    }

    componentDidMount() {
        var url = this.props.endpoint;
        var data = this.props.data;
        post(url, data)
        .then(response => {// JSON from `response.json()` call
            console.log(data);
        })
        .catch(error => {console.error(error)});
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
    }

    render() {
        const {data, loaded, placeholder} = this.state; // very nice line
        return loaded ? this.props.render(data) : <p>{placeholder}</p>;
    }

}

export default DataPoster;
