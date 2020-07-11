import React from 'react';
import Meme from './Meme';
import { NavLink } from 'react-router-dom';
import { whiteSpacesReplace } from '../functions/replace';
import '../style/MemesList.scss';

const MemesList = ({ tableOfMemes }) => {
    let memesCounter = tableOfMemes.length;
    return (
        <div className={`memes-container ${memesCounter <= 4 && `memes-container--lengthAdapted`}`}>
            {tableOfMemes.map(meme => (
                <NavLink key={meme.id} to={whiteSpacesReplace(meme.name)}>
                    <Meme meme={meme} key={meme.id} memesCounter={memesCounter} />
                </NavLink>
            ))}
        </div>
    );
}

export default MemesList;