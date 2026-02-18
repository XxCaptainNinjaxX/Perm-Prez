import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

import Home from "./Pages/Main-Pages/Home/Home";
import About from "./Pages/Main-Pages/About/About";
import Donation from "./Pages/Main-Pages/Donation/Donation";

export default function App() {
  return (
    <>
      <Header />

      <div className="page-body">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Donations" element={<Donation />} />
          </Routes>

          <h1>test test</h1>
        </main>
      </div>
    </>
  );
}
