import React, { useState } from 'react';
import axios from 'axios';
const ChosedMeme = ({ pickedMeme, setPickedMeme }) => {

    //Tylko wtedy, gdy nie uzywa sie boxes
    /*  const [text0, setText0] = useState("");
     const [text1, setText1] = useState(""); */

    const [boxText0, setBoxText0] = useState("");
    const [boxText1, setBoxText1] = useState("");
    const [boxText2, setBoxText2] = useState("");
    const [boxText3, setBoxText3] = useState("");
    const [boxText4, setBoxText4] = useState("");

    const [createdMeme, setCreatedMeme] = useState(null);
    const handleMeme = () => {
        setPickedMeme(null)
    }
    //rozwiazanie bez axiosa
    /*     const handleSubmit = async e => {
            e.preventDefault();
            //console.log('dziala')
            const params = {
                template_id: pickedMeme.id,
                //tylko wtedy gdy boxes sa nieuzywane, jak są to trzeba zamiast boxes &text0=${params.text0}&text1=%{params.text1}
                //text0: text0,
                //text1: text1,
                boxText0: boxText0,
                boxText1: boxText1,
                boxText2: boxText2,
                boxText3: boxText3,
                boxText4: boxText4,
                username: process.env.REACT_APP_IMGFLIP_USERNAME,
                password: process.env.REACT_APP_IMGFLIP_PASSWORD
            }
            const response = await fetch(
                `https://api.imgflip.com/caption_image?template_id=${params.template_id}&boxes[0][text]=${params.boxText0}&boxes[1][text]=${params.boxText1}&boxes[2][text]=${params.boxText2}&boxes[3][text]=${params.boxText3}&boxes[4][text]=${params.boxText4}&username=${params.username}&password=${params.password}`
            );
            const data = await response.json();
            console.log(data.data.url)
            setCreatedMeme(data.data.url)
        } */

    const handleSubmit = e => {
        e.preventDefault();
        const params = {
            template_id: pickedMeme.id,
            boxText0: boxText0,
            boxText1: boxText1,
            boxText2: boxText2,
            boxText3: boxText3,
            boxText4: boxText4,
            username: process.env.REACT_APP_IMGFLIP_USERNAME,
            password: process.env.REACT_APP_IMGFLIP_PASSWORD
        }
        axios.post(
            `https://api.imgflip.com/caption_image?template_id=${params.template_id}&boxes[0][text]=${params.boxText0}&boxes[1][text]=${params.boxText1}&boxes[2][text]=${params.boxText2}&boxes[3][text]=${params.boxText3}&boxes[4][text]=${params.boxText4}&username=${params.username}&password=${params.password}`
        ).then(response => {
            console.log(response.data)
            setCreatedMeme(response.data.data.url)
        })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <>
            {createdMeme ?

                <div>
                    <img src={createdMeme} alt="" />
                </div>
                :
                <div>
                    <form onSubmit={handleSubmit}>
                        <img src={pickedMeme.url} width="500" height="500" alt="" onClick={handleMeme} />
                        <h1>{pickedMeme.name}</h1>
                        {pickedMeme.box_count <= 2 ?
                            <>
                                <input type="text" placeholder="top title" value={boxText0} onChange={e => { setBoxText0(e.target.value) }} />
                                <input type="text" placeholder="bottom title" value={boxText1} onChange={e => { setBoxText1(e.target.value) }} />
                            </>
                            : pickedMeme.box_count <= 3 ?
                                <>
                                    <input type="text" placeholder="text 1" value={boxText0} onChange={e => { setBoxText0(e.target.value) }} />
                                    <input type="text" placeholder="text 2" value={boxText1} onChange={e => { setBoxText1(e.target.value) }} />
                                    <input type="text" placeholder="text 3" value={boxText2} onChange={e => { setBoxText2(e.target.value) }} />
                                </>
                                : pickedMeme.box_count <= 4 ?
                                    <>
                                        <input type="text" placeholder="text 1" value={boxText0} onChange={e => { setBoxText0(e.target.value) }} />
                                        <input type="text" placeholder="text 2" value={boxText1} onChange={e => { setBoxText1(e.target.value) }} />
                                        <input type="text" placeholder="text 3" value={boxText2} onChange={e => { setBoxText2(e.target.value) }} />
                                        <input type="text" placeholder="text 4" value={boxText3} onChange={e => { setBoxText3(e.target.value) }} />
                                    </>
                                    :
                                    <>
                                        <input type="text" placeholder="text 1" value={boxText0} onChange={e => { setBoxText0(e.target.value) }} />
                                        <input type="text" placeholder="text 2" value={boxText1} onChange={e => { setBoxText1(e.target.value) }} />
                                        <input type="text" placeholder="text 3" value={boxText2} onChange={e => { setBoxText2(e.target.value) }} />
                                        <input type="text" placeholder="text 4" value={boxText3} onChange={e => { setBoxText3(e.target.value) }} />
                                        <input type="text" placeholder="text 5" value={boxText4} onChange={e => { setBoxText4(e.target.value) }} />
                                    </>

                        }

                        <button type="submit">Create</button>
                    </form>
                </div>
            }
        </>
    );
}

export default ChosedMeme;