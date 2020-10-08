import React from 'react';
import styled from 'styled-components'

const StyledCopyrightP = styled.p`
    color: #e56b6f;
`


export default function Copyright(props) {

    const { state_copyright } = props;


    return (
        <div id="copyright-component">
            <StyledCopyrightP>Built by Erick Gonzalez using ⚛ React</StyledCopyrightP>
        </div>
        
    )
}