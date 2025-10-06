// put animations for this year plus artist statements beside them

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Festival = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Animation Festival
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            aliquam enim, eget facilisis enim nisl nec elit. Mauris euismod,
            sapien eu commodo cursus, enim nisl aliquam enim, eget facilisis
            enim nisl nec elit.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Benefits of Participating
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Morbi facilisis, enim at dictum cursus, enim nisl aliquam enim.
            </li>
            <li>
              Aliquam erat volutpat. Pellentesque euismod urna eu tincidunt.
            </li>
            <li>Connect with fellow artists and industry professionals.</li>
            <li>Showcase your work to a global audience.</li>
          </ul>
          <div className="mt-8 text-center">
            <img
              src="/assets/templogo.png"
              alt="Festival"
              className="mx-auto w-64 h-64 object-contain"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Festival;
