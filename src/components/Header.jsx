import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center container mx-auto py-6 px-20">
      <Link className="font-bold text-2xl bg-yellow-500 rounded-sm p-1" to="/">
        SMDB.
      </Link>
      <div className="flex gap-4 items-center">
        <input
          type="search"
          className="border px-4 py-2 rounded-sm"
          placeholder="Search a movie"
        />
        <Link to="all-movies" className="font-semibold hover:text-yellow-600">
          All movies
        </Link>
        <Link to="signup" className="font-semibold hover:text-yellow-600">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;