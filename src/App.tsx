import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import RD from "./pages/RD";
import ProductTools from "./pages/ProductTools";
import Contact from "./pages/Contact";
import Community from "./pages/Community";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rd" element={<RD />} />
        <Route path="/product-tools" element={<ProductTools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Layout>
  );
};

export default App;
