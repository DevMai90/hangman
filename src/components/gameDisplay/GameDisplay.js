import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Gallows from './Gallows';
import WordDisplay from './WordDisplay';
import WrongLetters from './WrongLetters';

// Will need to connect to redux to check number of incorrect guesses.
import { connect } from 'react-redux';

const GameDisplay = ({ word: { remainingGuesses, secretWord } }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-9">
          <div className="card text-center">
            <Gallows />
            <div className="container">
              <WordDisplay />
              <hr />
              <WrongLetters />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

GameDisplay.propTypes = {
  word: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(mapStateToProps)(GameDisplay);
