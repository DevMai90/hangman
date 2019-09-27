import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateDifficulty } from '../../actions/word';

const DifficultyLevel = ({ difficulty, updateDifficulty }) => {
  const difficultyRange = {
    1: 'SUNFLOWERS',
    2: 'DANDELIONS',
    3: 'ROSES',
    4: 'WALK IN THE PARK JOE',
    5: 'BELOW AVERAGE JOE',
    6: 'AVERAGE JOE',
    7: 'SUPER AVERAGE JOE',
    8: 'MANIAC JOE',
    9: 'LUDICROUS JOE',
    10: 'MONSTER JOE'
  };

  const onChange = e => {
    updateDifficulty(parseInt(e.target.value));
  };

  return (
    <div id="difficulty">
      <div className="container">
        <div className="form-group my-0 p-3">
          <label htmlFor="difficulty">Difficulty Level</label>
          <input
            type="range"
            className="custom-range"
            min="1"
            max="10"
            step="1"
            value={difficulty}
            onChange={e => onChange(e)}
          />
          <small>{difficultyRange[difficulty]}</small>
        </div>
      </div>
    </div>
  );
};

DifficultyLevel.propTypes = {
  difficulty: PropTypes.number.isRequired,
  updateDifficulty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  difficulty: state.word.difficulty
});

export default connect(
  mapStateToProps,
  { updateDifficulty }
)(DifficultyLevel);
