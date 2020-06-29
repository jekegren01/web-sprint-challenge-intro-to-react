// Write your Character component here

import React from 'react';
import styled, { css } from 'styled-components';
// import { PicNameContainer, PicName } from '../App'

const P = styled.p`
    font-family: cursive;

    ${props =>
        props.type === 'name' &&
        css`
        font-size: 30px;
        color: aqua;
        `
    }

`;

const Character = (props) => {
    return (
            <div className='container'>
                <img src={props.image} alt='Pic of character'/>
                <P type='name'>{props.name}</P>
                <P>I am from {props.location}</P>
            </div>
        
    )
}

export default Character;