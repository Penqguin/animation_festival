// import {
//   motion,
//   MotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "motion/react";
// import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const OrgPanel = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="h-screen py-10 px-20 flex flex-col gap-2 md:flex-row">
    <div className="basis-2/5 text-center items-center rounded-lg bg-amber-400">
      <img className="p-2" src={image}></img>
    </div>
    <div className="basis-3/5 rounded-lg bg-sky-800">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Organizations = () => {
  const orgs = [
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
    {
      image: "/orgs/orgs.jpg",
      title: "",
      description: "",
    },
  ];
  return (
    <div>
      <Navbar />
      {orgs.map((org, index) => (
        <OrgPanel
          key={index}
          image={org.image}
          title={org.title}
          description={org.description}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Organizations;
