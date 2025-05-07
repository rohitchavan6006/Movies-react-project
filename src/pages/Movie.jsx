import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  async function sendReq() {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SECRET}`,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data);

    setMovie(data);
  }

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <main className="container mx-auto">
      {movie && (
        <div className="px-20">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />

          {movie.homepage && (
            <a href={movie.homepage} target="_blank">
              Watch{" "}
            </a>
          )}
        </div>
      )}
    </main>
  );
}

export default Movie;