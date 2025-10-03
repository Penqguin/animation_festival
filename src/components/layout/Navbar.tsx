import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-gray-200/60 shadow-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="flex mx-auto justify-between items-center px-4 max-w-6xl py-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-black font-bold text-2xl mr-8 gap-2"
          >
            <img
              className="w-8 h-8 rounded-lg shadow"
              src="/assets/templogo.png"
              alt="Logo"
            />
            <span className="hidden md:flex tracking-tight font-extrabold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Animation Pool
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { to: "/aboutus", label: "About Us" },
              { to: "/festival", label: "Festival" },
              { to: "/gallery", label: "Gallery" },
              { to: "/organizations", label: "Orgs" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative px-4 py-2 rounded-lg font-medium text-gray-800 hover:text-primary transition group"
              >
                <span>{label}</span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="hover:bg-gray-500/40 rounded p-2"
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
              className="md:hidden bg-white/95 p-6 shadow-lg rounded-b-xl border-b border-gray-200"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <div className="flex flex-col text-center space-y-4">
                <Link
                  to="/"
                  className="text-black hover:text-primary font-semibold transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="text-black hover:text-primary font-semibold transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/festival"
                  className="text-black hover:text-primary font-semibold transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Festival
                </Link>
                <Link
                  to="/gallery"
                  className="text-black hover:text-primary font-semibold transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/organizations"
                  className="text-black hover:text-primary font-semibold transition"
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
