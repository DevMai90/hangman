import React from 'react';
import PropTypes from 'prop-types';
import DifficultyLevel from './DifficultyLevel';

import { connect } from 'react-redux';
import { resetGame, getSecretWord } from '../../actions/word';
import { resetGameStatus } from '../../actions/game';

const SidebarDisplay = ({
  word: { remainingGuesses },
  game: { winCount, loseCount },
  resetGame,
  getSecretWord,
  resetGameStatus
}) => {
  const onClickReset = e => {
    resetGame();
    resetGameStatus();
    getSecretWord();
  };

  return (
    <div id="sidebar" className="col-md-3 text-center text-white">
      <DifficultyLevel />

      <div id="game-stats" className="p-3">
        <p className="mb-0"># of Wins: {winCount}</p>
        <p className="mb-0"># of Losses: {loseCount}</p>
      </div>

      <div id="remaining-guesses" className="p-3">
        <p className="mb-0">Remaining Guesses: {remainingGuesses}</p>
      </div>

      <div id="reset" className="p-3">
        <button
          className="btn btn-outline-light"
          onClick={e => onClickReset(e)}
        >
          <i className="fas fa-undo" /> Reset Game
        </button>
      </div>

      <div id="timer" className="bg-danger p-5">
        <p className="mb-0">TIMER: 15...</p>
      </div>
    </div>
  );
};

SidebarDisplay.propTypes = {
  word: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  resetGame: PropTypes.func.isRequired,
  getSecretWord: PropTypes.func.isRequired,
  resetGameStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word,
  game: state.game
});

export default connect(
  mapStateToProps,
  { resetGame, getSecretWord, resetGameStatus }
)(SidebarDisplay);
