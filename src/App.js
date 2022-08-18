import React from "react";
import "./styles/app.css"

import {BrowserRouter} from "react-router-dom";
import { useNavigate } from "react-router-dom";


import Navbar from "./components/UI/navbar/navbar";
import MyRouter from "./components/router";

function App() {


    return (
        <BrowserRouter>
            <Navbar/>
            <MyRouter/>
        </BrowserRouter>
    );
}

export default App;
