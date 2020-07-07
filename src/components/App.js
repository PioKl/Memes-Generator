import React, { useState, useEffect } from 'react';
import '../style/App.scss';
import MemesList from './MemesList';
import ChosedMeme from './ChosedMeme';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { whiteSpacesReplace } from '../functions/replace';

function App() {

  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.imgflip.com/get_memes')
      .then(response => {
        console.log(response.data.data);
        setMemes(response.data.data.memes);
        setFilteredMemes(response.data.data.memes);
      })
      .catch(error => {
        console.log(error)
      })

  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    let actualMemesList = [];
    let newMemesList = [];
    if (e.target.value !== "") {
      actualMemesList = memes;
      newMemesList = actualMemesList.filter(meme => {
        return meme.name.toLowerCase().includes(e.target.value.toLocaleLowerCase());
      })
    } else {
      newMemesList = memes;
    }
    setFilteredMemes(newMemesList)
  }


  const chosedMeme = memes.map(meme => (
    <Route key={meme.id} path={`/${whiteSpacesReplace(meme.name)}`}>
      <ChosedMeme pickedMeme={meme} />
    </Route>
  ));

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <input type="text" value={search} onChange={handleSearch} />
            <MemesList tableOfMemes={filteredMemes} />
          </Route>
          {chosedMeme}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
