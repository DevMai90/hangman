import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';

// Uppercase and lowercase does not matter
const LetterInput = ({ guessLetter, secretWord }) => {
  const [formLetter, setFormLetter] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const incorrect = secretWord.split('').indexOf(formLetter) < 0;

    // Send letter to store
    guessLetter(formLetter, incorrect);

    setFormLetter('');
  };

  return (
    <div className="container">
      <h3 className="text-center">Guess the Letter</h3>
      <div className="d-flex justify-content-center">
        <form className="form-inline" onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            className="form-control mr-2"
            name="letter"
            placeholder="Guess a Letter!"
            maxLength="1"
            value={formLetter}
            onChange={e => setFormLetter(e.target.value.toUpperCase())}
          />

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

LetterInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
  guessLetter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  secretWord: state.word.secretWord
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(LetterInput);
