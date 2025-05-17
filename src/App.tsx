import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import RD from "./pages/RD";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import Nodes from "./pages/Nodes";
import Services from "./pages/Services";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rd" element={<RD />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/node" element={<Nodes />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  );
};

export default App;
