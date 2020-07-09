import React from 'react';
import Meme from './Meme';
import { NavLink } from 'react-router-dom';
import { whiteSpacesReplace } from '../functions/replace';
import '../style/MemesList.scss';

const MemesList = ({ tableOfMemes }) => {

    return (

        <div className="memes-container">
            {tableOfMemes.map(meme => (
                <NavLink key={meme.id} to={whiteSpacesReplace(meme.name)}>
                    <Meme meme={meme} key={meme.id} />
                </NavLink>
            ))}

        </div>


    );
}

export default MemesList;