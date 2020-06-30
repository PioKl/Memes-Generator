import React from 'react';

const Meme = ({ meme, setPickedMeme, pickedMeme }) => {

    const handleMeme = () => {
        setPickedMeme(meme)
        console.log(pickedMeme)
    }
    return (
        <img src={meme.url} width="225" height="225" title={meme.name} alt={meme.name} onClick={handleMeme} />
    );
}

export default Meme;