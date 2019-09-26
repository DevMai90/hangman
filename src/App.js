import React, { useEffect } from 'react';
import GameDisplay from './components/gameDisplay/GameDisplay';
// import Gallows from './components/gameDisplay/Gallows';
// import WordDisplay from './components/gameDisplay/WordDisplay';
// import WrongLetters from './components/gameDisplay/WrongLetters';
import LetterInput from './components/guessingArea/LetterInput';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { getSecretWord } from './actions/word';

const App = () => {
  useEffect(() => {
    store.dispatch(getSecretWord());
  });
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container my-3">
          <GameDisplay />

          <div className="row">
            <div className="col-md-9 mx-auto my-3">
              <div className="card">
                <LetterInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
