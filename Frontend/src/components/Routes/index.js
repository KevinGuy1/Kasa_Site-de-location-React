import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About.js";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Error404 from "../../pages/Error404"
import Logement from "../../pages/Logement";

const index = () => {
  return (
    <div className="text-tertiary font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/A-Propos" element={<About />} />
          <Route exact path="/:id" element={<Logement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default index;
