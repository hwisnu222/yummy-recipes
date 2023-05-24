import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
