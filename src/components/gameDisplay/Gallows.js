import React, { useEffect, Fragment } from 'react';
import SelectDifficulty from './SelectDifficulty';
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
import { resetGameStatus } from '../../actions/game';

const Gallows = ({
  word: { remainingGuesses, difficulty, wordList, loading },
  game: { status },
  resetGame,
  getSecretWord,
  resetGameStatus,
  getWordList,
  setLoading
}) => {
  const startGame = (
    <div>
      <div className="p-2">
        <button className="btn btn-primary px-5" onClick={e => onStartClick(e)}>
          <i className="far fa-arrow-alt-circle-right" /> Start Game
        </button>
      </div>
    </div>
  );

  const displayStatus = (
    <div className="fade-in">
      <div className="p-2">
        <button
          className={classnames('btn px-5', {
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
    <div id="gallows" className="border border-dark p-2">
      <img
        src={require(`../../images/Hangman-${remainingGuesses}.png`)}
        alt="Gallows"
      />

      <div id="message-display">
        {status && <div>{displayStatus}</div>}
        {!wordList && !loading ? (
          <Fragment>
            <SelectDifficulty />
            {startGame}
          </Fragment>
        ) : (
          !wordList && loading && <Spinner />
        )}
      </div>
    </div>
  );
};

Gallows.propTypes = {
  game: PropTypes.object.isRequired,
  word: PropTypes.object.isRequired,
  getWordList: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  getSecretWord: PropTypes.func.isRequired,
  resetGameStatus: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
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
    getSecretWord,
    resetGameStatus,
    setLoading
  }
)(Gallows);
