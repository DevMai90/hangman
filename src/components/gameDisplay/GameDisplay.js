import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Gallows from './Gallows';
import WordDisplay from './WordDisplay';
import UserKeypad from './UserKeypad';
import UserWordGuess from './UserWordGuess';

// Will need to connect to redux to check number of incorrect guesses.
import { connect } from 'react-redux';
import { getSecretWord } from '../../actions/word';
import { gameOver } from '../../actions/game';

const GameDisplay = ({
  word: { remainingGuesses, secretWord, guessedLetters, difficulty },
  getSecretWord,
  gameOver
}) => {
  // Set game status to lose if user runs out of guesses
  useEffect(() => {
    if (remainingGuesses === 0) {
      gameOver('lose');
    }
  });

  return (
    <div className="col-md-9">
      <div className=" text-center">
        <Gallows />
        {secretWord && (
          <div className="bg-alt text-white fade-in">
            <WordDisplay />
            <UserKeypad />
            <hr />
            <UserWordGuess />
          </div>
        )}
      </div>
    </div>
  );
};

GameDisplay.propTypes = {
  word: PropTypes.object.isRequired,
  getSecretWord: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { getSecretWord, gameOver }
)(GameDisplay);
