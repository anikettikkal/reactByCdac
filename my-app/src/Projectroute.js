import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Adduser from "./Components/Adduser";
import ShowUser from "./Components/ShowUser";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Product from "./Components/Product";
import Upcoming from "./Components/Upcoming";
import Trending from "./Components/Trending";
import TopRated from "./Components/TopRated";
import Comp4 from "./Components/Comp4";
import Comp21 from "./Components/Comp21";
import Comp6 from "./Components/Comp6";
import Comp31 from "./Components/Comp31";
import App from "./Components/App";
import PageNotFound from "./Components/PageNotFound";
import SingleMovie from "./Components/SingleMovie";
import SearchMovie from "./Components/SearchMovie";

const Projectroute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="adduser" element={<Adduser />} />
                <Route path="showuser" element={<ShowUser />} />
                <Route path="product" element={<Product />} />
                <Route path="comp1" element={<Comp1 />} />
                <Route path="comp2" element={<Comp2 />} />
                <Route path="comp3" element={<Comp3 />} />
                <Route path="comp4" element={<Comp4 />} />
                <Route path="comp6" element={<Comp6 />} />
                <Route path="comp21" element={<Comp21 />} />
                <Route path="comp31" element={<Comp31 />} />
                <Route path="search" element={<SearchMovie />} />
                <Route path="movie/:id" element={<SingleMovie />} />
                <Route path="trending" element={<Trending />} />
                <Route path="upcoming" element={<Upcoming />} />
                <Route path="toprated" element={<TopRated />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Projectroute;