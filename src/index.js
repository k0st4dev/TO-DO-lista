import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Unos from "./Unos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/unos" element={<Unos />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
