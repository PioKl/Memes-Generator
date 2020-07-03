import React from 'react';

const Meme = ({ meme }) => {

    return (
        <img src={meme.url} width="225" height="225" title={meme.name} alt={meme.name} />
    );
}

export default Meme;