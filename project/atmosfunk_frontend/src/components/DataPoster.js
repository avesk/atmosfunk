import React, { Component } from "react";
import PropTypes from "prop-types";

class DataPoster extends Component {

    static propTypes = {
        endpoint: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading..."
        }
    }

    componentDidMount() {
        console.log('In Data Poster');

        var url = this.props.endpoint;
        var data = this.props.data;
        console.log(url);
        console.log(data);
        this.post(url, data)
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
