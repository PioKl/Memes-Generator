import React, { useState, useEffect } from 'react';
import '../style/App.scss';
import MemesList from './MemesList';
import ChosedMeme from './ChosedMeme';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { whiteSpacesReplace } from '../functions/replace';
import Search from './Search';
import SearchContextProvider from '../contexts/SearchContext';

function App() {

  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [tipChoosed, setTipChoosed] = useState(false);

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

  const handleTipStatusChange = () => {
    if (tipChoosed === true) {
      setTipChoosed(false);
    }
  }

  const chosedMeme = memes.map(meme => (
    <Route key={meme.id} path={`/${whiteSpacesReplace(meme.name)}`}>
      <ChosedMeme pickedMeme={meme} />
    </Route>
  ));

  return (
    <SearchContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" onClick={handleTipStatusChange} >
          <Switch>
            <Route exact path="/">
              <div className="container">
                <header className="header">
                  <Search memes={memes} filteredMemes={filteredMemes} setFilteredMemes={setFilteredMemes} tipChoosed={tipChoosed} setTipChoosed={setTipChoosed} />
                </header>
                <main className="main">
                  <MemesList tableOfMemes={filteredMemes} />
                </main>
              </div>
            </Route>
            {chosedMeme}
          </Switch>
        </div>
      </Router >
    </SearchContextProvider>
  );
}

export default App;
