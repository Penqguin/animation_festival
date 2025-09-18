import { Link } from "react-router-dom";

// Check out our festivals
const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="mx-auto flex flex-col justify-center items-center px-4 py-2 max-w-6xl my-2 text-center space-y-6">
        <h2 className="text-4xl font-display font-bold">
          Want to see something cool?
        </h2>
        <p className="text-xl text-neutral-100 max-w-2xl">
          Check out our festivals. Discover incredible talent, connect with
          fellow artists, and be part of something extraordinary.
        </p>
        <Link
          to="/festival"
          className="mt-8 px-8 py-4 bg-secondary hover:bg-secondary-dark text-white
                     font-semibold rounded-full border-1 transition-all duration-300
                     transform hover:scale-105 shadow-glow"
        >
          Explore Festival Details
        </Link>
      </div>
    </section>
  );
};

export default CTA;
