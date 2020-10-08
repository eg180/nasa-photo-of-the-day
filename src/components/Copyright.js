import React from 'react';




export default function Copyright(props) {

    const { state_copyright } = props;


    return (
        <div id="copyright-component">
            <p id="copyright_footer">Photo copyright: {state_copyright}</p>
        </div>
        
    )
}