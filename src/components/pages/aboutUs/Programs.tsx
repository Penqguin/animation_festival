import { useState } from "react";
import { Link } from "react-router-dom";

type Program = {
  id: number;
  name: string;
  logo: string;
  link: string;
  description: string;
};

const initialPrograms: Program[] = [
  {
    id: 1,
    name: "TDSB",
    logo: "/assets/react.svg",
    link: "https://www.tdsb.on.ca/",
    description:
      "Workshops and showcases in partnership with the Toronto District School Board.",
  },
  {
    id: 2,
    name: "SHSM",
    logo: "/assets/react.svg",
    link: "https://www.ontario.ca/page/specialist-high-skills-major",
    description:
      "Specialist High Skills Major animation modules for high school students.",
  },
  {
    id: 3,
    name: "Cyber",
    logo: "/assets/react.svg",
    link: "https://www.cyber.org/",
    description:
      "Online courses and virtual events to reach students everywhere.",
  },
];

const Programs = () => {
  const [programs] = useState<Program[]>(initialPrograms);

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6 text-white relative">
        <span className="absolute -left-4 -top-2 w-8 h-8 rounded-full bg-purple-100 opacity-40 -z-10"></span>
        Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-black rounded-lg shadow-md p-6 flex flex-col items-center relative"
          >
            <img
              src={program.logo}
              alt={`${program.name} logo`}
              className="w-16 h-16 mb-4 object-contain"
            />
            <Link
              to={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-700 hover:underline mb-2"
            >
              {program.name}
            </Link>
            <p className="text-gray-700 text-center">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
