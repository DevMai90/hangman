import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';

// Uppercase and lowercase does not matter
const LetterInput = ({ guessLetter, word: { secretWord, guessedLetters } }) => {
  const [formLetter, setFormLetter] = useState('');

  const [inputError, setInputError] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    // Check if there is an input
    if (!formLetter) {
      return setInputError('Please guess a letter!');
    }

    // Check if letter is from English alphabet
    if (!formLetter.match(/[A-Z]/)) {
      return setInputError('Please guess a letter from A-Z!');
    }

    if (guessedLetters.indexOf(formLetter) >= 0) {
      return setInputError('Already guessed that letter!');
    }

    const incorrect = secretWord.split('').indexOf(formLetter) < 0;

    // Send letter to store
    guessLetter(formLetter, incorrect);

    setFormLetter('');
    setInputError('');
  };

  return (
    <div className="container">
      <h3 className="text-center">Guess the Letter</h3>
      {/* <div>{inputError && <InputError />}</div> */}
      <div className="d-flex justify-content-center">
        <form className="form-inline" onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            className="form-control mr-2"
            name="letter"
            placeholder="Guess a Letter!"
            maxLength="1"
            value={formLetter}
            onChange={e => setFormLetter(e.target.value.toUpperCase())}
          />
          {/* <small>{inputError}</small> */}

          <button className="btn btn-primary" type="submit">
            <i className="far fa-arrow-alt-circle-right" /> Submit
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

// LetterInput.propTypes = {
//   secretWord: PropTypes.string.isRequired,
//   guessLetter: PropTypes.func.isRequired,
//   guessedLetters: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(LetterInput);
