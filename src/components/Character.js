// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// import
import CharacterPrint from './CharacterPrint';


const Character = (props) => {
    return (
        <div className="container">
            { props.characters.map(character => (
                <CharacterPrint character={character} key={character.characters} />
            ))}
        </div>
    )
}

export default Character;
