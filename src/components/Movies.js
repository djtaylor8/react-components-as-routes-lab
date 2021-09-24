import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => {
          return <div key={idx}>
            {movie.title}{' - '}
            <span>{movie.time}</span> mins
            <ul>
              Genres: {movie.genres.join(', ')}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
