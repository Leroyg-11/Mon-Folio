import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projet from "./pages/Projet.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Mon-Folio/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projet" element={<Projet />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
