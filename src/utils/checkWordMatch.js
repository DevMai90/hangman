export const checkWordMatch = (secretWord, guessedLetters) => {
  return secretWord
    .split('')
    .map(item => {
      return guessedLetters.includes(item);
    })
    .every(item => {
      return item === true;
    });
};
