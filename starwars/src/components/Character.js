// Write your Character component here

import React from 'react';
import { PicNameContainer, PicName } from '../App'


const Character = (props) => {
    return (
            <div>
                <img src={props.image} alt='Pic of character'/>
                <p>{props.name}</p>
            </div>
        
    )
}

export default Character;