// Write your Character component here

import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '../App'

const P = styled.p`
    font-family: cursive;

    ${props =>
        props.type === 'name' &&
        css`
        font-size: 30px;
        color: aqua;
        `
    }    
    ${props =>
        props.type === 'location' &&
        css`
        font-size: 18px;
        color: aquamarine;
        `
    }

`;

const Character = (props) => {
    return (
            <Container>
                <img src={props.image} alt='Pic of character'/>
                <P type='name'>{props.name}</P>
                <P type='location'>I am from {props.location}</P>
            </Container>
        
    )
}

export default Character;