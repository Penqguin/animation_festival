import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Festival from "./pages/Festival";
import Gallery from "./pages/Gallery";
import Organizations from "./pages/Organizations";
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
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Organizations" element={<Organizations />} />
        {/* add custom routes above this */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
