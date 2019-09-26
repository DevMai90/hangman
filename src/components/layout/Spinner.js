import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center p-3">
      <div className="spinner-border"></div>
      <p>
        <small>Please wait while we find the perfect word...</small>
      </p>
    </div>
  );
};

export default Spinner;
