import React from 'react';
import '../style/Meme.scss'

const Meme = ({ meme }) => {

    return (
        <div className="meme-card">
            <img className="meme-card__img" src={meme.url} title={meme.name} alt={meme.name} />
            <div className="meme-card__overlay">
                <div className="meme-card__text">{meme.name}</div>
            </div>
        </div>
    );
}

export default Meme;