import React from 'react';
import styled from 'styled-components';

const StyledCharacterPrint = styled.div`
    border: 2px solid green;
    margin: 15px;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #98B9F2;
    background-color: #141B41;

    h3 {
        font-size: 20px;
        font-weight: normal;
        letter-spacing: .2rem;
    }
`

const CharacterPrint = (props) => {
    return (
        <StyledCharacterPrint>
            <h3>{props.character.name}</h3>
        </StyledCharacterPrint>
    )
}

export default CharacterPrint;
