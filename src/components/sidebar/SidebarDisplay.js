import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { resetGame, getSecretWord } from '../../actions/word';

const SidebarDisplay = ({
  word: { remainingGuesses },
  game: { winCount, loseCount },
  resetGame,
  getSecretWord
}) => {
  const onClickReset = e => {
    resetGame();
    getSecretWord();
  };
  return (
    <div id="sidebar" className="col-md-3 text-center text-white">
      <div id="difficulty">
        <div className="container">
          <div className="form-group my-0 p-3">
            <label htmlFor="difficulty">Difficulty Level</label>
            <input
              type="range"
              className="custom-range"
              min="1"
              max="10"
              step="1"
              // value="1"
            />
          </div>
        </div>
      </div>

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
  resetGame: PropTypes.func.isRequired,
  getSecretWord: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word,
  game: state.game
});

export default connect(
  mapStateToProps,
  { resetGame, getSecretWord }
)(SidebarDisplay);
