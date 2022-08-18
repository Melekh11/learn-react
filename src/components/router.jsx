import React from 'react';
import Navbar from "./UI/navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/*" element={<Posts/>}/>
        </Routes>
    );
};

export default MyRouter;