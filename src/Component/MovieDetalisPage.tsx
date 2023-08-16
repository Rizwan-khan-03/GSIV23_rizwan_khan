import React from 'react';
import './style.css';
import dummy from './dummy.png'

const movieData = {
    title: 'Movie Title',
    rating: 8.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    imageUrl: dummy,
  };

const MovieDetailsPage: React.FC = () => {
  return (
    <div className="movie-detals-card">
      <div className="movie-img">
        <img src={movieData.imageUrl} alt="Movie Poster" />
      </div>
      <div className="movie-details-text">
        <div className="movie-details">
          <div className="movie-title">{movieData.title} <span className="movie-rating">{`(${movieData.rating})`}</span></div>
          <div className="movie-year"> <span>{"Year"} | {"Length"} | {"Director"}</span></div>
          <div className="movie-Cast"> <span>{"Cast :"}  {"Actor1"} , {"Actor2"}</span></div>
          <div className="movie-description"> <p>{"Description : "} {movieData.description}</p></div>
        </div>
    
      </div>
    </div>
  );
};

export default MovieDetailsPage;
