import React from 'react';
import styled from 'styled-components';


const CharacterPrint = (props) => {
    return (
        <div className="container">
            <h3>{props.character.name}</h3>
        </div>
    )
}

export default CharacterPrint;
