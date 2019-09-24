import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(6);
  const [secretWord, setSecretWord] = useState('');

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
