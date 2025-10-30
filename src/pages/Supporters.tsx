import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const OrgPanel = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => (
  <div
    className="snap-center h-200 py-10 px-6 md:px-20 flex flex-col md:flex-row"
    id={title}
  >
    <div className="basis-2/5 text-center rounded-t-lg md:rounded-t-none md:rounded-l-lg bg-stone-700 flex justify-center items-center">
      <img className="p-2 h-full object-contain" src={image} alt={title} />
    </div>
    <div className="basis-3/5 rounded-b-lg md:rounded-b-none md:rounded-r-lg bg-stone-900 p-6 text-white">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">
        {title || "Organization"}
      </h3>
      <p className="mb-4">{description || "Description coming soon."}</p>
      <Link to={link || "#"} className="underline">
        Learn more
      </Link>
    </div>
  </div>
);

const Organizations = () => {
  const orgs = [
    {
      image: "/orgs/nelvana.png",
      title: "Nelvana",
      description:
        "A leading producer of children’s animation and family entertainment with a global reach.",
      link: "https://www.nelvana.com",
    },
    {
      image: "/orgs/JamFilled.png",
      title: "Jam Filled",
      description:
        "A Toronto-based animation studio known for high-quality 2D/3D production and international projects.",
      link: "https://www.jamfilled.com",
    },
    {
      image: "/orgs/Lakeside.png",
      title: "Lakeside Animation Studios",
      description:
        "An independent studio specialising in character-driven animation and visual development.",
      link: "https://www.lakesideanimation.com",
    },
    {
      image: "/orgs/Seneca.png",
      title: "Seneca Polytechnic",
      description:
        "A Canadian post-secondary institution offering industry-focused animation and digital media programs.",
      link: "https://www.senecacollege.ca",
    },
    {
      image: "/orgs/TAAFI.png",
      title: "TAAFI",
      description:
        "The Toronto Animation Arts Festival International — a festival celebrating animation, workshops and community events.",
      link: "https://taafi.com",
    },
    {
      image: "/orgs/ToonBoom.png",
      title: "Toon Boom",
      description:
        "Creators of professional animation software used across studios and schools worldwide.",
      link: "https://www.toonboom.com",
    },
    {
      image: "/orgs/wacom.png",
      title: "Wacom",
      description:
        "Global leader in pen tablets and interactive pen displays, widely used by artists and animators.",
      link: "https://www.wacom.com",
    },
    {
      image: "/orgs/SHSM.svg",
      title: "SHSM",
      description:
        "Specialist High Skills Major — a program that helps students gain sector-specific skills and certifications.",
      link: "https://www.ontario.ca/page/specialist-high-skills-major-shsm",
    },
    {
      image: "/orgs/ExperientialLearning.PNG",
      title: "TDSB Experiential Learning",
      description:
        "Toronto District School Board's experiential learning programs connecting students with hands-on industry experience.",
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
      {orgs.map((org, index) => (
        <OrgPanel
          key={index}
          image={org.image}
          title={org.title}
          description={org.description}
          link={org.link}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Organizations;
