import React, { useEffect } from 'react';
import GameDisplay from './components/gameDisplay/GameDisplay';

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
        </div>
      </div>
    </Provider>
  );
};

export default App;
