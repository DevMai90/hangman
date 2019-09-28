import React, { useEffect, useState, Fragment } from 'react';
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
    <div className="fadeIn">
      {/* <p className="mb-0">Are you ready to begin?</p> */}
      <div className="p-2">
        <button className="btn btn-primary" onClick={e => onClick(e)}>
          <i className="far fa-arrow-alt-circle-right" /> Find Word
        </button>
      </div>
    </div>
  );

  const displayStatus = (
    <div className="fadeIn">
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
    </div>
  );

  const onClick = e => {
    if (!wordList) getWordList(difficulty);
    setLoading();
    // resetGame();
    // resetGameStatus();
    // getSecretWord();
  };

  return (
    <Fragment>
      <div className="heading text-white p-3">
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
      {/* 
      <div>
        {!wordList && loading ? (
          <Fragment>{startGame}</Fragment>
        ) : !wordList && !loading ? (
          <Spinner />
        ) : (
          <p>WordList</p>
        )}
      </div> */}

      <div id="message-display">
        {!wordList && loading ? (
          <Fragment>{startGame}</Fragment>
        ) : (
          !wordList && !loading && <Spinner />
        )}
      </div>

      {/* <div id="lose-alert">
        {status ? (
          <Fragment>{displayStatus}</Fragment>
        ) : (
          !secretWord && <Fragment>{startGame}</Fragment>
        )}
      </div> */}
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
