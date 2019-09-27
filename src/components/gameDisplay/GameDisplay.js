import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Gallows from './Gallows';
import WordDisplay from './WordDisplay';
import UserKeypad from './UserKeypad';
import UserWordGuess from './UserWordGuess';

// Will need to connect to redux to check number of incorrect guesses.
import { connect } from 'react-redux';
import { gameOver } from '../../actions/game';

const GameDisplay = ({
  word: { remainingGuesses, secretWord, guessedLetters },
  gameOver
}) => {
  // Check how many chances remains
  useEffect(() => {
    if (remainingGuesses === 0) {
      gameOver('lose');
    }
  });

  // Check if we have a match

  return (
    <div className="col-md-9">
      <div className="card bg-transparent text-center">
        <Gallows />
        <div className="bg-alt text-white">
          <WordDisplay />
          <UserKeypad />
          <hr />
          <UserWordGuess />
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

export default connect(
  mapStateToProps,
  { gameOver }
)(GameDisplay);
