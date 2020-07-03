import React from 'react';
import Meme from './Meme';
import { NavLink } from 'react-router-dom';

const MemesList = ({ tableOfMemes }) => {

    return (

        <div>
            {tableOfMemes.map(meme => (
                <NavLink key={meme.id} to={`${meme.name}`}>
                    <Meme meme={meme} key={meme.id} />
                </NavLink>
            ))}

        </div>


    );
}

export default MemesList;