import React, { Fragment } from 'react';

// Review destructuring objects
const Gallows = () => {
  // useEffect(() => {
  //   if (remainingGuesses === 0) {
  //     console.log('wafgfasfdgs');
  //   }

  //   console.log(remainingGuesses);
  // }, [remainingGuesses]);
  return (
    <Fragment>
      <div className="card-header heading text-light">
        <h2>
          Hang <small>(on)</small> Man!
        </h2>
      </div>

      <div className="bg-success py-3">
        <h1>Placeholder for Hangman Image</h1>
        <h1>Placeholder for Hangman Image</h1>
        <h1>Placeholder for Hangman Image</h1>
        <h1>Placeholder for Hangman Image</h1>
      </div>
    </Fragment>
  );
};

export default Gallows;
