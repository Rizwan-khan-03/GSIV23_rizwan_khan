import React from 'react';
import './style.css';

interface MovieCardProps {
  title: string;
  rating: number;
  description: string;
  imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, rating, description, imageUrl }) => {
  return (
    <div className="movie-card">
      <div className="movie-img">
        <img src={imageUrl} alt="Movie Poster" />
      </div>
      <div className="movie-details">
        <div className="movie-details-title">
          <div className="movie-title">{title}</div>
          <div className="movie-rating">Rating: {rating}</div>
        </div>
        <div className="movie-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
