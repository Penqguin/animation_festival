import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// cards for the supporters
// TODO: add all organizations
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
    image: "/orgs/SHSM.png",
    title: "SHSM",
    link: "https://www.ontario.ca/page/specialist-high-skills-major",
  },
  {
    image: "/orgs/ExperientialLearning.PNG",
    title: "TDSB Experiential Learning",
    link: "https://www.tdsb.on.ca",
  },
];

const OrgPanel = ({ image, title }: { image: string; title: string }) => (
  <div className="w-35 sm:w-50 mx-4 rounded-lg bg-gray-950/70">
    <img
      src={image}
      alt={title}
      className="mx-auto h-25 sm:h-35 p-4 w-auto object-contain"
    />
  </div>
);

// TODO: change to banner like toonboom where it shows the organizations
//       logos infinitely scrolling horizontally like a banner
// maybe add velocity scroll as shown in motion docs

const Support = () => {
  return (
    <div className="py-8 lg:mx-40">
      <img
        src="/animations/Marquee.gif"
        className="sm:w-1/2 md:1/3 xl:w-1/4 absolute left-auto bottom-10 sm:bottom-0 z-50"
      ></img>
      <Link to="/supporters">
        <Marquee
          className="pb-4"
          autoFill={true}
          speed={100}
          gradient={true}
          gradientColor="oklch(21% 0.034 264.665)"
          gradientWidth={200}
        >
          {orgs.map((org) => (
            <OrgPanel key={org.title} image={org.image} title={org.title} />
          ))}
        </Marquee>
        <Marquee
          autoFill={true}
          direction="right"
          speed={100}
          gradient={true}
          gradientColor="oklch(21% 0.034 264.665)"
          gradientWidth={200}
        >
          {orgs.map((org) => (
            <OrgPanel key={org.title} image={org.image} title={org.title} />
          ))}
        </Marquee>
      </Link>
    </div>
  );
};

export default Support;
