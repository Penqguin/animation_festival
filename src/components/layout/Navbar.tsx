import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="flex mx-auto justify-between items-center px-4  max-w-6xl mt-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-black font-bold text-2xl mr-8"
          >
            <span className="hidden md:flex">Animation Pool</span>
            <img className="w-8" src="/assets/templogo.png"></img>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/aboutus"
              className="text-black hover:text-gray-600 transition"
            >
              About Us
            </Link>
            <Link
              to="/festival"
              className="text-black hover:text-gray-600 transition"
            >
              Festival
            </Link>
            <Link
              to="/gallery"
              className="text-black hover:text-gray-600 transition"
            >
              Gallery
            </Link>
            <Link
              to="/organizations"
              className="text-black hover:text-gray-600 transition"
            >
              Orgs
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="hover:bg-gray-500/40 rounded pt-1 px-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                style={{ display: "inline-block" }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.span>
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background p-4 shadow-md"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <div className="flex flex-col text-center space-y-4">
                <Link
                  to="/"
                  className="text-black hover:text-gray-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="text-black hover:text-gray-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/festival"
                  className="text-black hover:text-gray-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Festival
                </Link>
                <Link
                  to="/gallery"
                  className="text-black hover:text-gray-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/organizations"
                  className="text-black hover:text-gray-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Orgs
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
