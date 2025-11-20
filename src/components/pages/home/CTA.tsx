import { Link } from "react-router-dom";

// Check out our festivals
const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <img src="animations/Ball1.gif" className="w-full h-fit"></img>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto flex flex-col justify-center items-center px-4 py-2 max-w-6xl text-center space-y-6">
          <h2 className="text-4xl font-display font-bold">
            Want to see something cool?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl">
            Check out who we are and what we do
          </p>
          <Link
            to="/aboutus"
            className="mt-8 px-8 py-4 bg-secondary hover:bg-secondary-dark text-white
               font-semibold rounded-full border-1 transition-all duration-300
               transform hover:scale-105 shadow-glow"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
