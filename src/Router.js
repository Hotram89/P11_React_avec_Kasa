import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import ErrorPage from "./routes/Error/ErrorPage";
import Flat from "./components/Flat/Flat";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flat" element={<Flat />} />
        {/* path='*' fonctionne si l'url n'est pas déclaré au dessus */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
