import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center">
      <div className="spinner-border spinner-border-sm"></div>
      <p className="mb-0">
        <small>Please wait while we find the perfect word...</small>
      </p>
    </div>
  );
};

export default Spinner;
