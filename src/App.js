import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Architects from "./Pages/Architects";
import Person from "./Pages/Person"

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/architects" element={<Architects />} />
                <Route path="/person/:id" element={<Person />} />
            </Routes>
        </HashRouter>

    );
}

export default App;
