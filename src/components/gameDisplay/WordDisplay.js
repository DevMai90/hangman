import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

const WordDisplay = ({
  word: { secretWord, guessedLetters, wrongLetters }
}) => {
  const wordBlanks = secretWord.split('').map((item, index) => {
    if (guessedLetters.indexOf(item) < 0) {
      return (
        <p key={index} className="p-3" style={{ fontSize: 24 }}>
          <u>
            <strong>?</strong>
          </u>
        </p>
      );
    }
    return (
      <p key={index} className="p-3" style={{ fontSize: 24 }}>
        <u>
          <strong>{item}</strong>
        </u>
      </p>
    );
  });

  const displayGuesses = guessedLetters.map(item => {
    if (wrongLetters.indexOf(item) >= 0) {
      return <p className="text-danger">{item}</p>;
    }

    return <p className="text-success">{item}</p>;
  });

  return (
    <div className="container">
      <hr />
      <div className="d-flex justify-content-center">
        {secretWord ? wordBlanks : <Spinner />}
      </div>
      <h3>Which guesses are correct?</h3>
      <p>{secretWord}</p>
      {/* Check guessed letters against secretWord */}
      {/* If the letter appears in the secretWord then display it if guessed */}
      {displayGuesses}
    </div>
  );
};

WordDisplay.propTypes = {
  word: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(mapStateToProps)(WordDisplay);
