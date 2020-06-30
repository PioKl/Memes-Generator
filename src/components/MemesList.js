import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meme from './Meme';
import ChosedMeme from './ChosedMeme';

const MemesList = () => {
    const [memes, setMemes] = useState([]);
    const [pickedMeme, setPickedMeme] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.imgflip.com/get_memes')
            .then(response => {
                console.log(response.data.data);
                setMemes(response.data.data.memes);
            })
            .catch(error => {
                console.log(error)
            })

    }, [])
    return (
        <div>

            {pickedMeme ? <ChosedMeme pickedMeme={pickedMeme} setPickedMeme={setPickedMeme} /> : memes.map(meme => {
                return <Meme meme={meme} key={meme.id} pickedMeme={pickedMeme} setPickedMeme={setPickedMeme} />
            })}

        </div>
    );
}

export default MemesList;