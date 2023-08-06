import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Experience from "./routes/Experiece"
import About from "./routes/About"
import Contact from "./routes/Contact"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;