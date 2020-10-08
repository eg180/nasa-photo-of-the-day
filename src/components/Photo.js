import React from 'react';
import App from '../App';




export default function Photo(props) {

const { state } = props;

    return (
        <div id="photo-component">
        <img src={state} alt="NASA's Photo of the Day"></img>
        </div>
        
    )
}