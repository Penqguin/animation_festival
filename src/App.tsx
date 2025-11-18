import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Festival from "./pages/Festival";
import Gallery from "./pages/Gallery";
import Supporters from "./pages/Supporters";
import NotFound from "./pages/NotFound";
// import { Cursor } from "./components/Cursor";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Cursor /> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Festival" element={<Festival />} />
        {/* Gallery routes: /gallery and per-gallery */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<Gallery />} />
        {/* legacy/uppercase paths preserved */}
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/supporters" element={<Supporters />} />
        {/* add custom routes above this */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
