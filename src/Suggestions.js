import React from 'react';

const Suggestions = ({ results }) => {
  const options = results && results.map((result, index) => <li key={index}>{result.location}</li>);
  return (
    <div>
      <ul>{options}</ul>
    </div>
  );
};

export default Suggestions;
