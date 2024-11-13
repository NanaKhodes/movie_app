import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.css"

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movies/${movie.id}`);
  };
  return (
    <div className={styles.MovieCard}  onClick={handleNavigate}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.name || movie.original_name}
      />
    </div>
  );
};

export default MovieCard;
