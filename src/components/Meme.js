import React from 'react';
import '../style/Meme.scss'
import { whiteSpacesReplace } from '../functions/replace';

const Meme = ({ meme, memesCounter }) => {

    return (
        <div className="meme-card">
            <img className={`meme-card__img meme-card__img--${whiteSpacesReplace(meme.name)} ${memesCounter <= 4 && "meme-card__img--lengthAdapted"}`} src={meme.url} title={meme.name} alt={meme.name} />
            <div className="meme-card__overlay">
                <div className="meme-card__text">{meme.name}</div>
            </div>
        </div>
    );
}

export default Meme;