// import React, { useState } from 'react'
// import MovieCard from './MovieCard';
// import dummy from './dummy.png'
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import * as action from '../Redux/Action';
// import Header from './Header';
// function MovieDetails() {
//   const moviesListFromStore = useSelector((state: any) => state?.MoviesReducer?.movies)
//   const [moviesList, setMoviesList] = useState<any>([])

//   const dispatch = useDispatch();
//   React.useEffect(() => {
//     dispatch(action.getMoviesRequest());
//     setMoviesList(moviesListFromStore)

//   }, [])
//   return (
//     <>
//       <Header setMoviesList={setMoviesList} moviesList={moviesList} />
//       <div className='MovieDetails'>
//         {
//           moviesList?.map((item: any, ind: number) => (
//             <Link to={`${item?.id}`} key={`${item}${item?.id.toString()}`}>
//               <MovieCard
//                 title={item.title}
//                 rating={item.vote_average}
//                 description={item.overview}
//                 imageUrl={item.imageUrl || dummy}
//               />
//             </Link>
//           ))
//         }
//       </div>
//     </>

//   )
// }

// export default MovieDetails
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import dummy from './dummy.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Redux/Action';
import Header from './Header';

function MovieDetails() {
  const moviesListFromStore = useSelector((state: any) => state?.MoviesReducer?.movies);
  const dispatch = useDispatch();

  const [filteredMovies, setFilteredMovies] = useState<any>(moviesListFromStore);

  useEffect(() => {
    dispatch(action.getMoviesRequest());
    setFilteredMovies(moviesListFromStore);
  }, []);
  useEffect(() => {
    setFilteredMovies(moviesListFromStore);
  }, [moviesListFromStore]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchKeyword = e.target.value.toLowerCase();
    
    if (!searchKeyword) {
      setFilteredMovies(moviesListFromStore);
    } else {
      const filteredMovies = moviesListFromStore.filter((movie: any) =>
        movie.title.toLowerCase().includes(searchKeyword)
      );
      setFilteredMovies(filteredMovies);
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className='MovieDetails'>
        {filteredMovies?.map((item: any, ind: number) => (
          <Link to={`${item?.id}`} key={`${item}${item?.id.toString()}`}>
            <MovieCard
              title={item.title}
              rating={item.vote_average}
              description={item.overview}
              imageUrl={item.imageUrl || dummy}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MovieDetails;
