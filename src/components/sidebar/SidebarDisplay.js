import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { resetEntireGame } from '../../actions/word';
import { resetGameHistory } from '../../actions/game';

const SidebarDisplay = ({
  word: { remainingGuesses, difficulty },
  game: { winCount, loseCount },
  resetEntireGame,
  resetGameHistory
}) => {
  const onClickReset = () => {
    resetEntireGame();
    resetGameHistory();
  };

  // Use hearts to show remaining guesses
  const displayHearts = remainingGuesses => {
    let hearts = [];
    if (remainingGuesses === 0) {
      return (hearts = <i className="fas fa-heart-broken px-1 mt-2"></i>);
    }
    for (let i = 0; i < remainingGuesses; i++) {
      hearts.push(<i key={i} className="far fa-heart px-1 mt-2"></i>);
    }
    return hearts;
  };

  return (
    <div id="sidebar" className="col-md-3 text-center text-white">
      <div id="remaining-guesses" className="p-3">
        <p className="mb-0">Remaining Guesses: {remainingGuesses}</p>
        <span>{displayHearts(remainingGuesses)}</span>
      </div>
      <div id="difficulty" className="py-2">
        <p className="mb-0">Difficulty Level:</p>
        <p className="mb-0">{difficulty.name}</p>
      </div>

      <div id="game-stats" className="p-3">
        <p className="mb-0"># of Wins: {winCount}</p>
        <p className="mb-0"># of Losses: {loseCount}</p>
      </div>

      <div id="reset" className="p-3">
        <button
          className="btn btn-outline-light"
          onClick={() => onClickReset()}
        >
          <i className="fas fa-undo" /> Reset Game
        </button>
      </div>
    </div>
  );
};

SidebarDisplay.propTypes = {
  word: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  resetEntireGame: PropTypes.func.isRequired,
  resetGameHistory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  word: state.word,
  game: state.game
});

export default connect(
  mapStateToProps,
  { resetEntireGame, resetGameHistory }
)(SidebarDisplay);
