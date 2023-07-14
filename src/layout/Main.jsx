import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Header/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;