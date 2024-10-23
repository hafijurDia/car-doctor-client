import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Header/Navbar";
import Footer from "../pages/shared/Footer/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};


MainLayout.propTypes = {

};


export default MainLayout;
