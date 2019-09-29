import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateDifficulty } from '../../actions/word';

const SelectDifficulty = ({ difficulty, updateDifficulty }) => {
  const difficultyRange = {
    1: { name: 'JOE ON THE BEACH (1)', level: 1, minLength: 2, maxLength: 4 },
    2: { name: 'BELOW AVERAGE JOE (2)', level: 2, minLength: 3, maxLength: 5 },
    3: { name: 'AVERAGE JOE (3)', level: 3, minLength: 3, maxLength: 6 },
    4: { name: 'ABOVE AVERAGE JOE (4)', level: 4, minLength: 4, maxLength: 6 },
    5: { name: 'SUPER AVERAGE JOE (5)', level: 5, minLength: 4, maxLength: 7 },
    6: { name: 'NOT SO AVERAGE JOE (6)', level: 6, minLength: 5, maxLength: 9 },
    7: { name: 'INSANE JOE (7)', level: 7, minLength: 6, maxLength: 10 },
    8: { name: 'MANIAC JOE (8)', level: 8, minLength: 7, maxLength: 11 },
    9: { name: 'LUDICROUS JOE (9)', level: 9, minLength: 8, maxLength: 12 },
    10: { name: 'MONSTER JOE (10)', level: 10, minLength: 9, maxLength: 13 }
  };

  const onChange = e => {
    updateDifficulty(difficultyRange[parseInt(e.target.value)]);
  };

  return (
    <div id="select-difficulty" className="mx-auto">
      <div className="form-group my-0 p-0">
        <label htmlFor="difficulty">
          Difficulty Level ({difficulty.level})
        </label>
        <input
          type="range"
          className="custom-range"
          min="1"
          max="10"
          step="1"
          value={difficulty.level}
          onChange={e => onChange(e)}
        />
      </div>
    </div>
  );
};

SelectDifficulty.propTypes = {
  difficulty: PropTypes.object.isRequired,
  updateDifficulty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  difficulty: state.word.difficulty
});

export default connect(
  mapStateToProps,
  { updateDifficulty }
)(SelectDifficulty);
