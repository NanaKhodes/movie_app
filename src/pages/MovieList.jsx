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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <div className="mb-3">
        <Search onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 ml-10">
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
    </div>
  );
}

export default MovieList
