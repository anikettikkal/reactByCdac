import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../src/Components/App';
import Trending from '../src/Components/Trending';
import Upcoming from '../src/Components/Upcoming';
import Home from '../src/Components/Home';
import Login from '../src/Components/Login';


export default function Layout() {
  return (
    <>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="trending" element={<Trending />} />
                <Route path="upcoming" element={<Upcoming />} />
            </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}
