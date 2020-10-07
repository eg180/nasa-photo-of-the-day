import React from 'react';
import App from '../App';




export default function Photo(props) {

const { photoDuJour } = props;

    return (
        <div id="photo-component">
        <img>{props.currentPhoto}</img>
        </div>
        
    )
}