import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import { Provider } from 'react-redux';
import Mystore from "../redux/Mystore";
import { Outlet } from "react-router";
import "../CSS/style.css";

function App(){
    return(
        <div>
        <Provider store={Mystore}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </Provider>
        </div>
    )
}

export default App;