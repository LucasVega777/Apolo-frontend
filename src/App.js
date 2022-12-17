import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from './login'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact key={"/"} element={<HomePage/>}/>
            <Route path="/frontendaprendelds" exact key={"/frontendaprendelds"} 
              element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
