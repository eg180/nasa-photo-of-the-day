import React from 'react';
import App from '../App';
import styled from 'styled-components'


const PhotoBackgroundDiv = styled.div`
    background-color: #6930c3;
    margin-top: 1rem;
`



export default function Photo(props) {

const { state } = props;

    return (
        <PhotoBackgroundDiv id="photo-component">
        <img src={state} alt="NASA's Photo of the Day"></img>
        </PhotoBackgroundDiv>
        
    )
}