import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Will need to connect to redux to check number of incorrect guesses.
import { connect } from 'react-redux';

// Review destructuring objects
const Gallows = ({ remainingGuesses }) => {
  return (
    <Fragment>
      <div className="card-header">
        <div className="card-title text-center">
          <h1>Hangman</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mx-auto">
          <p>Remaining Guesses: {remainingGuesses}</p>
        </div>
      </div>
    </Fragment>
  );
};

Gallows.propTypes = {
  remainingGuesses: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  remainingGuesses: state.word.remainingGuesses
});

export default connect(mapStateToProps)(Gallows);
