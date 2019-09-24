import React, { useState } from 'react';
import { connect } from 'react-redux';
import { guessLetter } from '../../actions/word';

// Uppercase and lowercase does not matter
const LetterInput = ({ guessLetter }) => {
  const [formLetter, setFormLetter] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    // Send letter to store
    guessLetter(formLetter);

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

export default connect(
  null,
  { guessLetter }
)(LetterInput);
