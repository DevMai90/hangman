import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Gallows from './Gallows';
import WordDisplay from './WordDisplay';
import UserKeypad from './UserKeypad';
import UserWordGuess from './UserWordGuess';

import { connect } from 'react-redux';
import { gameOver } from '../../actions/game';

import checkWordMatch from '../../utils/checkWordMatch';

const GameDisplay = ({
  word: { guessedLetters, remainingGuesses, secretWord },
  gameOver
}) => {
  useEffect(() => {
    if (remainingGuesses === 0) {
      gameOver('lose');
    }
  }, [remainingGuesses, gameOver]);

  useEffect(() => {
    if (secretWord) {
      if (checkWordMatch(secretWord, guessedLetters)) gameOver('win');
    }
  }, [guessedLetters, gameOver, secretWord]);

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
  gameOver: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { gameOver }
)(GameDisplay);
