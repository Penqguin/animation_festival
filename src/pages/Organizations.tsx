import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

const ORGS = [
  {
    id: 1,
    name: "Org One",
    description: "A great organization for animators.",
    logo: "/assets/react.svg",
    link: "/organizations/1",
  },
  {
    id: 2,
    name: "Org Two",
    description: "Supporting creative communities.",
    logo: "/assets/vite.svg",
    link: "/organizations/2",
  },
  {
    id: 3,
    name: "Org Three",
    description: "Empowering artists everywhere.",
    logo: "/assets/templogo.png",
    link: "/organizations/3",
  },
];

const Organizations = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            All Organizations
          </h1>
          <div className="grid grid-cols-1 md:grid gap-8">
            {ORGS.map((org) => (
              <div
                key={org.id}
                className="bg-black rounded-xl shadow-lg p-8 flex flex-col items-center h-full max-w-md w-full mx-auto"
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
                <p className="text-gray-600 mb-4 text-center">
                  {org.description}
                </p>
                <button
                  className="mt-auto px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                  onClick={() => navigate(org.link)}
                >
                  Visit Page
                </button>
              </div>
            ))}
          </div>
          {/* TODO: Add link back to orgs carousel section if needed */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Organizations;
