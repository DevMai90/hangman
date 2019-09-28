import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { connect } from 'react-redux';
import {
  getWordList,
  resetGame,
  getSecretWord,
  setLoading
} from '../../actions/word';
import { setWinLose, resetGameStatus } from '../../actions/game';

const Gallows = ({
  word: { secretWord, remainingGuesses, difficulty, wordList, loading },
  game: { status },
  resetGame,
  getSecretWord,
  setWinLose,
  resetGameStatus,
  getWordList,
  setLoading
}) => {
  useEffect(() => {
    setWinLose(status);
  }, [setWinLose, status]);

  const startGame = (
    <div>
      <div className="p-2">
        <button className="btn btn-primary" onClick={e => onStartClick(e)}>
          <i className="far fa-arrow-alt-circle-right" /> Start Game
        </button>
      </div>
    </div>
  );

  const displayStatus = (
    <div className="fade-in">
      <div className="p-2">
        <button
          className={classnames('btn', {
            'btn-danger': status === 'lose',
            'btn-success': status === 'win'
          })}
          onClick={e => onResetClick(e)}
        >
          <i className="far fa-arrow-alt-circle-right" /> Play Again?
        </button>
      </div>
    </div>
  );

  const onStartClick = e => {
    if (!wordList) getWordList(difficulty);
    setLoading();
  };

  const onResetClick = e => {
    resetGameStatus();
    resetGame();
    getSecretWord(wordList);
  };

  return (
    <Fragment>
      <div className="heading text-white p-3">
        <h2>
          Hang <small>(on)</small> Man!
        </h2>
      </div>

      <img
        id="gallows"
        className="py-3"
        src={require(`../../images/Hangman-${remainingGuesses}.png`)}
        alt="Gallows"
      />

      <div id="message-display">
        {status && <div>{displayStatus}</div>}
        {!wordList && !loading ? (
          <Fragment>{startGame}</Fragment>
        ) : (
          !wordList && loading && <Spinner />
        )}
      </div>

      {/* {status && <div>{displayStatus}</div>} */}
    </Fragment>
  );
};

Gallows.propTypes = {
  game: PropTypes.object.isRequired,
  word: PropTypes.object.isRequired,
  getWordList: PropTypes.func.isRequired,
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
  {
    getWordList,
    resetGame,
    setWinLose,
    getSecretWord,
    resetGameStatus,
    setLoading
  }
)(Gallows);
