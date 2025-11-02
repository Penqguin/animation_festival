import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";

const OrgPanel = ({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) => (
  <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-13 flex justify-center">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className="block transform transition-transform hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="mx-auto h-35 w-auto object-contain"
      />
    </a>
  </div>
);

const Organizations = () => {
  const orgs = [
    {
      image: "/orgs/nelvana.png",
      title: "Nelvana",
      link: "https://www.nelvana.com",
    },
    {
      image: "/orgs/JamFilled.png",
      title: "Jam Filled",

      link: "https://www.jamfilled.com",
    },
    {
      image: "/orgs/Lakeside.png",
      title: "Lakeside Animation Studios",

      link: "https://www.lakesideanimation.com",
    },
    {
      image: "/orgs/Seneca.png",
      title: "Seneca Polytechnic",

      link: "https://www.senecacollege.ca",
    },
    {
      image: "/orgs/TAAFI.png",
      title: "TAAFI",

      link: "https://taafi.com",
    },
    {
      image: "/orgs/ToonBoom.png",
      title: "Toon Boom",

      link: "https://www.toonboom.com",
    },
    {
      image: "/orgs/wacom.png",
      title: "Wacom",

      link: "https://www.wacom.com",
    },
    {
      image: "/orgs/SHSM.svg",
      title: "SHSM",
      link: "https://www.ontario.ca/page/specialist-high-skills-major",
    },
    {
      image: "/orgs/ExperientialLearning.PNG",
      title: "TDSB Experiential Learning",
      link: "https://www.tdsb.on.ca",
    },
  ];
  useEffect(() => {
    const root = document.documentElement;
    const prevSnap = root.style.scrollSnapType;
    const prevBehavior = root.style.scrollBehavior;
    // enable document-level vertical snap while this component is mounted
    root.style.scrollSnapType = "y mandatory";
    root.style.scrollBehavior = "smooth";
    return () => {
      // restore previous styles
      root.style.scrollSnapType = prevSnap || "";
      root.style.scrollBehavior = prevBehavior || "";
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-800">
        {/* Banner Section */}
        <div className="w-full py-12 mb-10 flex flex-col items-center relative">
          <h1 className="relative text-5xl font-extrabold text-white mb-4">
            Supporters
          </h1>
        </div>
        <div className="center flex flex-wrap">
          {orgs.map((org, index) => (
            <OrgPanel
              key={index}
              image={org.image}
              title={org.title}
              link={org.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Organizations;
