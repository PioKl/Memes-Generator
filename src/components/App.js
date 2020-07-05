import React, { useState, useEffect } from 'react';
import '../style/App.scss';
import MemesList from './MemesList';
import ChosedMeme from './ChosedMeme';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { whiteSpacesReplace } from '../functions/replace';

function App() {

  const [memes, setMemes] = useState([]);
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

  const chosedMeme = memes.map(meme => (
    <Route key={meme.id} path={`/${whiteSpacesReplace(meme.name)}`}>
      <ChosedMeme pickedMeme={meme} />
    </Route>
  ))
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MemesList tableOfMemes={memes} />
          </Route>
          {chosedMeme}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
