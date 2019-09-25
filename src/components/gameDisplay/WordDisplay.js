import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const WordDisplay = ({ secretWord }) => {
  return (
    <div>
      <h3>Which guesses are correct?</h3>
      <p>{secretWord}</p>
      {/* Check guessed letters against secretWord */}
      {/* If the letter appears in the secretWord then display it if guessed */}
    </div>
  );
};

const mapStateToProps = state => ({
  secretWord: state.word.secretWord
});

export default connect(mapStateToProps)(WordDisplay);
