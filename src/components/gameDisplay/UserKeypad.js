import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';
import uuidv4 from 'uuid/v4';

const UserKeypad = ({ word: { secretWord, guessedLetters }, guessLetter }) => {
  // Input validation
  const [inputError, setInputError] = useState('');

  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const keypadFirstRow = alphabet.slice(0, 13);
  const keypadSecondRow = alphabet.slice(13);

  const onClick = e => {
    const clickedLetter = e.target.innerText;
    const incorrect = secretWord.split('').indexOf(clickedLetter) < 0;

    if (guessedLetters.indexOf(clickedLetter) > -1) {
      return setInputError('Already guessed that letter!');
    }

    guessLetter(clickedLetter, incorrect);
    setInputError('');
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center flex-wrap">
        {keypadFirstRow.map(item => {
          return (
            <p
              key={uuidv4()}
              className="p-2 mx-1 circle-icon text-white"
              onClick={e => onClick(e)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {keypadSecondRow.map(item => {
          return (
            <p
              key={uuidv4()}
              className="p-2 mx-1 circle-icon text-white"
              onClick={e => onClick(e)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <span className="mb-2 bg-danger text-white">
          {inputError ? inputError : ' '}
        </span>
      </div>
    </Fragment>
  );
};

UserKeypad.propTypes = {
  word: PropTypes.object.isRequired,
  guessLetter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(UserKeypad);
