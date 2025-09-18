import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky">
      <div className="mx-auto flex justify-between rounded-full border border-gray-400 items-center px-4 py-2 max-w-6xl mt-2">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-white font-bold text-2xl mr-8"
        >
          <span>Animation Pool</span>
          <img className="w-8" src="/assets/templogo.png"></img>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/aboutus"
            className="text-white hover:text-gray-300 transition"
          >
            About Us
          </Link>
          <Link
            to="/festival"
            className="text-white hover:text-gray-300 transition"
          >
            Festival
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-gray-300 transition"
          >
            Gallery
          </Link>
          <Link
            to="/organizations"
            className="text-white hover:text-gray-300 transition"
          >
            Orgs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
