import "/src/utils/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/40 text-white py-10 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/assets/templogo.png"
            alt="Festival Logo"
            className="w-16 h-16 mb-2"
          />
          <span className="font-bold text-lg">Animation Festival</span>
          <span className="text-gray-400 text-sm mt-1">
            Celebrating Creativity
          </span>
        </div>
        {/* Navigation links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
          <Link to="/aboutus" className="hover:underline">
            About Us
          </Link>
          <Link to="/festival" className="hover:underline">
            Festival
          </Link>
          <Link to="/organizations" className="hover:underline">
            Organizations
          </Link>
          <Link to="/gallery" className="hover:underline">
            Gallery
          </Link>
        </div>
        {/* Socials and copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3 mb-2">
            <svg width="24" height="24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>

            <svg width="24" height="24" fill="currentColor">
              <rect x="4" y="8" width="16" height="8" rx="4" />
            </svg>

            <svg width="24" height="24" fill="currentColor">
              <polygon points="9,8 16,12 9,16" />
            </svg>
          </div>
          <span className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Animation Festival. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
