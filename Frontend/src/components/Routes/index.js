import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Logement from "../../pages/Logement.js";
import Navbar from "../Navbar";
import Footer from "../Footer";
// une page erreur ? 

const index = () => {
  return (
    <div className="text-tertiary font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/fiche-logement" element={<Logement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default index;
