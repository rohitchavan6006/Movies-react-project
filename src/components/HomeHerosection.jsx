import { Link } from "react-router-dom";

function HomeHeroSection() {
  return (
    <main className="p-20 bg-gradient-to-r from-rose-100 to-teal-100">
      <h1 className="text-center font-bold text-5xl">
        Best moives <span className="text-yellow-600">review, Rating</span> and
        where to watch website in the world.
      </h1>
      <p className="text-center pt-16 text-neutral-700 px-20">
        The Internet Movie Database SMDb is an online database of information
        related to films, television series, podcasts, home videos, video games,
        and streaming content online
      </p>
      <div className="flex justify-center pt-16">
        <Link
          to="/all-movies"
          className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded-lg transition font-bold hover:text-white"
        >
          All Movies
        </Link>
      </div>
    </main>
  );
}

export default HomeHeroSection;