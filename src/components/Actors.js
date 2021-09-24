import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return <div key={idx}>{actor.name}{' '}
          Movies: <ul>{actor.movies.join(', ')}</ul>
          </div>
      })}
    </div>
  );
};

export default Actors;
