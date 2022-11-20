import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Proyecto from "./proyecto/Proyecto";
import PageNotFound from "./pagenotfound";

function App() {
    //Render Proyecto component when path is '/proyecto'
    return (
        <Router>
            <Routes>
                <Route path="/proyecto" element={<Proyecto />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
