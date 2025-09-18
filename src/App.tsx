import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Festival from "./pages/Festival";
import Gallery from "./pages/Gallery";
import Organizations from "./pages/Organizations";
import Navbar from "./components/layout/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Organizations" element={<Organizations />} />
      </Routes>
    </Router>
  );
};

export default App;
