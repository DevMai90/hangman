import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateDifficulty } from '../../actions/word';

const DifficultyLevel = ({ difficulty, updateDifficulty }) => {
  const difficultyRange = {
    1: { name: 'SUNFLOWERS', level: 1, minLength: 2, maxLength: 4 },
    2: { name: 'DANDELIONS', level: 2, minLength: 3, maxLength: 5 },
    3: { name: 'ROSES', level: 3, minLength: 3, maxLength: 6 },
    4: { name: 'WALK IN THE PARK JOE', level: 4, minLength: 4, maxLength: 7 },
    5: { name: 'BELOW AVERAGE JOE', level: 5, minLength: 4, maxLength: 8 },
    6: { name: 'AVERAGE JOE', level: 6, minLength: 5, maxLength: 9 },
    7: { name: 'SUPER AVERAGE JOE', level: 7, minLength: 6, maxLength: 10 },
    8: { name: 'MANIAC JOE', level: 8, minLength: 7, maxLength: 11 },
    9: { name: 'LUDICROUS JOE', level: 9, minLength: 8, maxLength: 12 },
    10: { name: 'MONSTER JOE', level: 10, minLength: 9, maxLength: 13 }
  };

  const onChange = e => {
    updateDifficulty(difficultyRange[parseInt(e.target.value)]);
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
            value={difficulty.level}
            onChange={e => onChange(e)}
          />
          <small>{difficulty.name}</small>
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
