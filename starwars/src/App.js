import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled, { css } from 'styled-components';

export const PicNameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;

  const Title = styled.h1`
   text-align: center;
   color: white;
   font-size: 3rem;
   -webkit-text-stroke 2px black;
   text-stroke: 2px black;
 `;




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    const [ characters, setCharacters ] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('Res from useEffect of Rick&Morty', res);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('Error from useEffect of Rick&Morty', err);
      });
  }, []);

  return (
    <div className="App">
      <Title>Rick and Morty Characters</Title>
      <PicNameContainer>
      {characters.map(character => {
        return (
          <Character 
            key={character.id}
            name={character.name}
            image={character.image}
            location={character.location.name}
          />
        );
      })}
      </PicNameContainer>
    </div>
  );
}

export default App;
