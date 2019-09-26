import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Gallows from './Gallows';
import WordDisplay from './WordDisplay';
import UserInput from './UserInput';

// Will need to connect to redux to check number of incorrect guesses.
import { connect } from 'react-redux';

const GameDisplay = ({ word: { remainingGuesses, secretWord } }) => {
  // Keep logic in App.js? Overlay modal?
  useEffect(() => {
    if (remainingGuesses === 0) console.log('Game over');
  });

  return (
    <div className="col-md-9">
      <div className="card text-center">
        <Gallows />
        <div className="container">
          <WordDisplay />
          <hr />
          <UserInput />
        </div>
      </div>
    </div>
  );
};

GameDisplay.propTypes = {
  word: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(mapStateToProps)(GameDisplay);
