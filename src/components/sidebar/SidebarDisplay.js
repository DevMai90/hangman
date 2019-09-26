import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const SidebarDisplay = ({ word: { remainingGuesses } }) => {
  return (
    <div className="col-md-3">
      <div className="card text-center heading text-white">
        <div className="card-body">
          <div className="form-group">
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
          <p>Remaining Guesses: {remainingGuesses}</p>
          <p># of Wins: TBD</p>
          <p># of Losses: TBD</p>
          <p>TIMER: 15...</p>
          <button className="btn btn-outline-light">Reset Game</button>
        </div>
      </div>
    </div>
  );
};

SidebarDisplay.propTypes = {
  word: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  word: state.word
});

export default connect(mapStateToProps)(SidebarDisplay);
