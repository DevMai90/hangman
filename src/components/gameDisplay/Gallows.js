import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { connect } from 'react-redux';
import { resetGame, getSecretWord } from '../../actions/word';
import { setWinLose, resetGameStatus } from '../../actions/game';

const Gallows = ({
  word: { secretWord, remainingGuesses },
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
            'btn-danger': status === 'lose',
            'btn-success': status === 'win'
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

      <div id="gallows" className="py-3">
        {/* REQUIRE */}
        <img
          src={require(`../../images/Hangman-${remainingGuesses}.png`)}
          alt=""
        />
      </div>

      <div id="lose-alert">
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
  getSecretWord: PropTypes.func.isRequired,
  resetGameStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  game: state.game,
  word: state.word
});

export default connect(
  mapStateToProps,
  { resetGame, setWinLose, getSecretWord, resetGameStatus }
)(Gallows);
