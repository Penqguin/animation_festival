/**
 * About Us:
 * Who we are
 * our goals
 * Impact 
 * programs
  - tdsb
  - shsm
  - cyber
 * 
 * Layout:
 * - Banner at the top
 * - Alternating image and text sections for each info block
 */

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhoWeAre from "../components/pages/aboutUs/WhoWeAre";
import OurGoals from "../components/pages/aboutUs/OurGoals";
import Impact from "../components/pages/aboutUs/Impact";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="w-full py-12 mb-10 flex flex-col items-center relative">
        {/* Decorative circles */}
        <span className="absolute left-10 top-6 w-24 h-24 rounded-full bg-pink-200 opacity-50 -z-10"></span>
        <span className="absolute right-20 top-2 w-16 h-16 rounded-full bg-yellow-100 opacity-60 -z-10"></span>
        <h1 className="relative text-5xl font-extrabold text-white mb-4">
          {/* Circle behind part of the text */}
          <span className="absolute -left-8 -top-4 w-16 h-16 rounded-full bg-blue-100 opacity-40 -z-10"></span>
          About Us
        </h1>
        {/* Small circle behind text */}
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full bg-green-100 opacity-40 -z-10"></span>
      </div>

      <div className="flex flex-col gap-16 max-w-4xl mx-auto mb-4 px-4">
        <WhoWeAre />
        <OurGoals />
        <Impact />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
