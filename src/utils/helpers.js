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

export const checkSecretVowels = secretWord => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];

  return vowels.filter(item => {
    return secretWord.includes(item);
  }).length;
};

export const checkUniqueLetters = secretWord => {
  return [...new Set(secretWord.split(''))].length;
};
