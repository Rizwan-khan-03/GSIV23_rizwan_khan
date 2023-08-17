import React, { useState } from 'react'
import './style.css';
import dummy from './dummy.png'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetailsPage: React.FC = () => {
  const [movie, setMovie] = useState<any>({})
  const params = useParams()
  const moviesListFromStore = useSelector((state: any) => state?.MoviesReducer?.movies)
  React.useEffect(() => {
    if (params?.id) {
      moviesListFromStore.forEach((element: any) => {
        if (element.id == params?.id) {
          setMovie(element)
        }
      });
    }
  }, [])

  return (
    <>
      <div className='header-class'>
        <div className='search'>
          {"Movie Details"}
        </div>
        <div className='home-icon'>
          <Link to={'/'}>
            <i className="material-icons">home</i>
          </Link>
        </div>
      </div>
      <div className="movie-detals-card">
        <div className="movie-img">
          <img src={movie.imageUrl || dummy} alt="Movie Poster" />
        </div>
        <div className="movie-details-text">
          <div className="movie-details">
            <div className="movie-title">{movie.title} <span className="movie-rating">{`(${movie.vote_average})`}</span></div>
            <div className="movie-year"> <span>{new Date(movie.release_date).getFullYear()} | {"Length"} | {"Director"}</span></div>
            <div className="movie-Cast"> <span>{"Cast :"}  {"Actor1"} , {"Actor2"}</span></div>
            <div className="movie-description"> <p>{"Description : "} {movie.overview}</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
