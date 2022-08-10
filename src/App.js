import React, { useEffect, useState } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import { Homes } from "./pages/Homes";
import { Blog } from "./pages/Blog";
import { ToastContainer } from "react-toastify";
import { AddEditBlog } from "./pages/AddEditBlog";
function App() {
  const [load, upadateLoad] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    upadateLoad(false);
  }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/homes" element={<Homes />} />
          <Route exact path="/addBlog" element={<AddEditBlog />} />
          <Route exact path="/editBlog/:id" element={<AddEditBlog />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/project" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="*" element={<Home />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
