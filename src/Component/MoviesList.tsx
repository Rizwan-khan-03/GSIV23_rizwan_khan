import React from 'react'
import MovieCard from './MoviesCard';
import dummy from './dummy.png'
import { Link } from 'react-router-dom';
function MovieDetails() {
  const movieData = {
    title: 'Movie Title',
    rating: 8.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    imageUrl: dummy,
  };
  const list = ["one", "two", "three", "four", "five"]
  return (
    <div className='MovieDetails'>

      {
        list.map((item, ind) => (
          <Link to={item}>
            <MovieCard
              title={movieData.title + " " + item}
              rating={movieData.rating}
              description={movieData.description}
              imageUrl={movieData.imageUrl}
            />
          </Link>
        ))
      }



    </div>
  )
}

export default MovieDetails