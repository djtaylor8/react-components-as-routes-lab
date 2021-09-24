import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => {
        return <div key={idx}>{director.name}{' '}
          Movies: <ul>{director.movies.join(', ')}</ul>
          </div>
      })}
    </div>
  );
}

export default Directors
