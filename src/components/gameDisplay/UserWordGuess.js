import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';

const UserWordGuess = ({
  guessLetter,
  word: { secretWord, guessedLetters }
}) => {
  const [formWord, setFormWord] = useState('');

  const [inputError, setInputError] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    // Check if there is an input
    if (!formWord) {
      return setInputError('Enter a word');
    }

    // Check if letter is from English alphabet
    if (!formWord.match(/^[A-Z]+$/)) {
      return setInputError('Only letters are allowed to be guessed');
    }

    if (guessedLetters.indexOf(formWord) >= 0) {
      return setInputError('Already guessed that letter!');
    }

    const incorrect = secretWord.split('').indexOf(formWord) < 0;

    // Send letter to store
    guessLetter(formWord, incorrect);
    if (formWord === secretWord) {
      console.log(`Winner! Secret word is ${formWord}`);
      alert(`Winner! Secret word is ${formWord}`);
    }

    setFormWord('');
    setInputError('');
  };
  return (
    <div>
      <h4>Feeling lucky?</h4>
      <div className="d-flex justify-content-center">
        <form className="form-inline" onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            className="form-control mr-2"
            name="letter"
            placeholder="Guess the word"
            value={formWord}
            onChange={e => setFormWord(e.target.value.toUpperCase())}
          />
          {/* <small>{inputError}</small> */}

          <button className="btn btn-primary" type="submit">
            <i className="far fa-arrow-alt-circle-right" /> Go!
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <span className="mb-2 bg-danger text-white">
          {inputError ? inputError : ' '}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(UserWordGuess);

// Allow user to guess entire word
// word - Force input to be capitalized
// Check for errors. Alphabetical letters only. No numbers, spaces, special characters etc.
// Must be compared against secretWord
// If wrong then count as one strike
// Add the string to guessedLetters and wrongLetters state
// Decrement 1 chance
