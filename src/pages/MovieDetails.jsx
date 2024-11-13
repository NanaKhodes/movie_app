import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"

// const genres = {
//   18: "Drama",
//   28: "Action",
//   35: "Comedy",
//   16: "Animation",
//   80: "Crime",
// };

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=118cb798a420b8412f021af1787b8012`
        );
        console.log(id);
        setMovie(response.data);
      } catch (error) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [id]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  const handleCloseDetails = () => {
    navigate("/");
  };
  if (!movie) return <div>Please wait...</div>;

  return (
    <div className={styles.MovieDetails}>
      {movie.backdrop_path && (
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.original_name}
        />
      )}

      {/* <img
        className=" "
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.name || movie.original_name}
      /> */}

      <h2 className={styles.h2}>{movie.name || movie.original_name}</h2>
      <p className={styles.p}>
        Overview:
        {movie.overview}
      </p>
      <p className={styles.p}>First Air Date: {movie.first_air_date}</p>
      <p className={styles.p}>Vote Average: {movie.vote_average}</p>
      <p className={styles.p}>Popularity: {movie.popularity}</p>
      <p className={styles.p}>Language: {movie.original_language}</p>
      <button className={styles.button} onClick={handleCloseDetails}>
        Close
      </button>
      {/* <p>
        Genres: {movie.genre_ids.map((id) => genres[id] || "Unknown").join(",")}
      </p> */}
    </div>
  );
};

export default MovieDetails;
