import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";

import Home from "./Pages/Main-Pages/Home/Home";
import About from "./Pages/Main-Pages/About/About";
import Donation from "./Pages/Main-Pages/Donation/Donation";

export default function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Donations" element={<Donation />} />
      </Routes> */}
      <Header />
      <h1> test test</h1>
    </>
  );
}
