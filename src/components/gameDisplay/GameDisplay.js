import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Gallows from './Gallows';
import WordDisplay from './WordDisplay';
import Keypad from './Keypad';
import UserInput from './UserInput';

// Will need to connect to redux to check number of incorrect guesses.
import { connect } from 'react-redux';

const GameDisplay = ({
  word: { remainingGuesses, secretWord, guessedLetters }
}) => {
  // Check how many chances remains
  useEffect(() => {
    if (remainingGuesses === 0) {
      console.log('Game over');
      alert('Game over');
    }
  });

  // Check if we have a match

  return (
    <div className="col-md-9">
      <div className="card text-center">
        <Gallows />
        <div className="container">
          <WordDisplay />
          <Keypad />
          <hr />
          <UserInput />
        </div>
      </div>
    </div>
  );
};

GameDisplay.propTypes = {
  word: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(mapStateToProps)(GameDisplay);
