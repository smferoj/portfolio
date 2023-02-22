import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout/layout/Layout";
import Home from "../src/pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/aboutMe/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Error404 from "./pages/error404/Error404";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error404/>} />
      </Route>
    </Routes>
  
  );
}

export default App;
