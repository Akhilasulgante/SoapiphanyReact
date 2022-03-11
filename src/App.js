import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs/About";
import Product from "./components/products/Product";
import Stories from "./components/UserStories/Stories";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
