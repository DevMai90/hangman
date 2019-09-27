import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetGame, getSecretWord } from '../../actions/word';
import { setWinLose, resetGameStatus } from '../../actions/game';
import classnames from 'classnames';

// Review destructuring objects
const Gallows = ({
  word: { secretWord },
  game: { status },
  resetGame,
  getSecretWord,
  setWinLose,
  resetGameStatus
}) => {
  useEffect(() => {
    setWinLose(status);
  }, [setWinLose, status]);
  const displayStatus = (
    <Fragment>
      <p className="mb-0">
        You {status}! The correct word was... <strong>{secretWord}</strong>
      </p>

      <div className="p-2">
        <button
          className={classnames('btn', {
            'btn-outline-danger': status === 'lose',
            'btn-outline-success': status === 'win'
          })}
          onClick={e => onClick(e)}
        >
          <i className="fas fa-undo" /> Play Again
        </button>
      </div>
    </Fragment>
  );

  const onClick = e => {
    resetGame();
    resetGameStatus();
    getSecretWord();
  };
  return (
    <Fragment>
      <div className="card-header heading text-light">
        <h2>
          Hang <small>(on)</small> Man!
        </h2>
      </div>

      <div className="bg-light py-3">
        <h1>Placeholder for Hangman Image</h1>
        <h1>Placeholder for Hangman Image</h1>
        <h1>Placeholder for Hangman Image</h1>
        <h1>Placeholder for Hangman Image</h1>
      </div>

      <div id="lose-alert" className="bg-light">
        {status && <Fragment>{displayStatus}</Fragment>}
      </div>
    </Fragment>
  );
};

Gallows.propTypes = {
  game: PropTypes.object.isRequired,
  word: PropTypes.object.isRequired,
  resetGame: PropTypes.func.isRequired,
  setWinLose: PropTypes.func.isRequired,
  getSecretWord: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  game: state.game,
  word: state.word
});

export default connect(
  mapStateToProps,
  { resetGame, setWinLose, getSecretWord, resetGameStatus }
)(Gallows);
