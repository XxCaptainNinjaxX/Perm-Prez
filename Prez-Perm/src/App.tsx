import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

import Home from "./Pages/Main-Pages/Home/Home";
import About from "./Pages/Main-Pages/About/About";
import Donation from "./Pages/Main-Pages/Donation/Donation";

import NBA from "./Pages/Sub-Pages/NBA";
import ALL from "./Pages/Sub-Pages/ALL";
import Interviews from "./Pages/Sub-Pages/Interviews";
import Music from "./Pages/Sub-Pages/Music";
import NFL from "./Pages/Sub-Pages/NFL";
import Other from "./Pages/Sub-Pages/Other";
import Politics from "./Pages/Sub-Pages/Politics";

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
            <Route path="/NBA" element={<NBA />} />
            <Route path="/NFL" element={<NFL />} />
            <Route path="/ALL" element={<ALL />} />
            <Route path="/Other" element={<Other />} />
            <Route path="/Politics" element={<Politics />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Interviews" element={<Interviews />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
