import React, { useState } from 'react';
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
    <div>
      <h3 className="text-center">Guess Letter</h3>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="letter"
            maxLength="1"
            value={formLetter}
            onChange={e => setFormLetter(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  secretWord: state.word.secretWord
});

export default connect(
  mapStateToProps,
  { guessLetter }
)(LetterInput);
