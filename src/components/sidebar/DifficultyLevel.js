import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateDifficulty } from '../../actions/word';

const DifficultyLevel = ({ difficulty }) => {
  return (
    <div id="difficulty" className="py-3">
      <p className="mb-0">Difficulty Level:</p>
      <p className="mb-0">{difficulty.name}</p>
    </div>
  );
};

DifficultyLevel.propTypes = {
  difficulty: PropTypes.object.isRequired,
  updateDifficulty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  difficulty: state.word.difficulty
});

export default connect(
  mapStateToProps,
  { updateDifficulty }
)(DifficultyLevel);
