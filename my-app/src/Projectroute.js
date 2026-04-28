import { BrowserRouter,Routes, Route } from "react-router";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Adduser from "./Components/Adduser";
import ShowUser from "./Components/ShowUser";
import App from "./Components/App";
import PageNotFound from "./Components/PageNotFound";

const Projectroute = (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="adduser" element={<Adduser />} />
                <Route path="showuser" element={<ShowUser />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
       </Routes>
    </BrowserRouter>
)

export default Projectroute;