import React from 'react';




export default function Date(props) {
    const {state, state_explanation, state_photographer, state_date} = props;


    return (
        <div id="date-component">
            <p class="headings">Date taken: {state_date}</p>
            <p class="headings">Explanation: {state_explanation}</p>
            <p class="headings">Photographer: {state_photographer}</p>

        </div>
        
    )
}