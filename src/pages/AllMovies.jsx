import { useState } from "react";
import AllMoviesHero from "../components/AllMoviesHero";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllMovies() {
  const [movies, setMovies] = useState([]);

  async function sendReq() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SECRET}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.results);

    const moviesArr = data.results;

    setMovies(moviesArr);
  }

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <AllMoviesHero />
      <div className="grid grid-cols-4 justify-center gap-4 p-20">
        {movies.map((movie) => {
          return (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="p-4 border border-neutral-800 rounded-xl flex flex-col gap-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="rounded-xl"
              />
              <p className="font-semibold ">{movie.title}</p>
              <p className="text-sm text-neutral-600">
                {movie.overview.substring(0, 60)}...
              </p>
              <p>Rating : {movie.vote_average}</p>
              <p>Total reviews : {movie.vote_count}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AllMovies;