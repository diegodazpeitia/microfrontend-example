
import React from "react";

import ReactDOM from "react-dom";
import "./index.css";

import Footer from "./Footer";

import Navbar from "./Navbar";
const App = () => (
  <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}> <Navbar />
    <div className="text-center">
      <h2>
        Welcome to primary application's home page
      </h2>
    </div>
    <Footer />
  </div>

);

ReactDOM.render(<App />, document.getElementById("app"));