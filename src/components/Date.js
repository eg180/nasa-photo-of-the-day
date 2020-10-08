import React from 'react';
import styled from 'styled-components'

const StyledDateExplanationDiv = styled.div`
    
    font-family: 'Special Elite', cursive;
    font-weight: 900;
    background-color: #5e60ce;
    padding: 3rem;
    color: #80ffdb;
`

const StyledParagraph = styled.p`
    font-weight: 700;
    color: #a8dadc;
`



export default function Date(props) {
    const {state, state_explanation, state_photographer, state_date} = props;


    return (
        <StyledDateExplanationDiv>
            <p>Date taken: {state_date}</p>
            <StyledParagraph>{state_explanation}</StyledParagraph>
            <p>Photographer: {state_photographer}</p>

        </StyledDateExplanationDiv>
        
    )
}