import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Whatsapp from "./components/Whatsapp.jsx";
import Product from "./Pages/Product.jsx";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/article/:id" element={<Article />} /> */}
      </Routes>
      <Footer />
      <Whatsapp />
    </Router>
  );
};

const About = () => <div>About Page</div>;

export default App;
