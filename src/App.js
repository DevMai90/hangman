import React from 'react';
import GameDisplay from './components/gameDisplay/GameDisplay';
import SidebarDisplay from './components/sidebar/SidebarDisplay';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container my-3">
          <div className="row">
            <GameDisplay />
            <SidebarDisplay />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
