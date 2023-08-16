import React ,{useState}from 'react'
import MovieCard from './MovieCard';
import dummy from './dummy.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Redux/Action';
function MovieDetails() {
  const moviesListFromStore = useSelector((state:any) => state?.MoviesReducer?.movies)
  const [moviesList, setMoviesList] = useState<any>(moviesListFromStore ?moviesListFromStore:[])

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(action.getMoviesRequest());
    setMoviesList(moviesListFromStore)
    
  }, [])
  const movieData = {
    title: 'Movie Title',
    rating: 8.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    imageUrl: dummy,
  };
  return (
    <div className='MovieDetails'>
      {
        moviesList?.map((item:any, ind:number) => (
          <Link to={`${item?.id}`} key={`${item}${item?.id.toString()}`}>
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