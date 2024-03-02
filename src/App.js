//import React, { Component } from 'react';
import React, { useState } from "react";
import "./App.css";

//import logo from './logo.svg';
//import './App.css';
import TextBox from "./components/TextBox.js";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState("");
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  return [
    <div className="d-flex flex-column justify-content-center w-100 h-100">
      <div className="container my-4">
        <h3
          className="inline-block text-center my-4"
          id="title"
          style={{ backgroundColor: "li" }}
        >
          Text Utilities App
        </h3>
        <TextBox showAlert={showAlert} />
        <Alert alert={alert} />
      </div>
    </div>,
  ];
}

export default App;
