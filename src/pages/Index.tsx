import Hero from "../components/pages/home/Hero";
import Overview from "../components/pages/home/Overview";
import CTA from "../components/pages/home/CTA";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <CTA />
      <Footer />
    </>
  );
};

export default Index;
