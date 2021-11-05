// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// import
import CharacterPrint from './CharacterPrint';

const StyledCharacter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 8rem;
`

const Character = (props) => {
    return (
        <StyledCharacter>
            { props.characters.map(character => (
                <CharacterPrint character={character} key={character.name} />
            ))}
        </StyledCharacter>
    )
}

export default Character;
