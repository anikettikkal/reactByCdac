import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";
import "../CSS/style.css";

function App(){
    return(
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )
}

export default App;