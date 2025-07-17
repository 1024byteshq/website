import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import RD from "./pages/RD";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/Policy";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rd" element={<RD />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/services" element={<Services />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
};

export default App;
