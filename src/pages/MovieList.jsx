import React, { useEffect, useState } from 'react'

import axios from 'axios';

import MovieCard from '../components/MovieCard';
import Search from '../components/Search';




const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=118cb798a420b8412f021af1787b8012`
        );
        setMovies(response.data.results);
      } catch (error) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };


  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{}} className="grid grid-cols-2 gap-3 p-5 ml">
      {/* <Search onSearch={handleSearch} /> */}
      {movies
        .filter((movie) =>
          (movie.title || movie.original_name || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

export default MovieList
