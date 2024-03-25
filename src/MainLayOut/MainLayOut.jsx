import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayOut = () => {
    return (
        <div className="w-[1440px] mx-auto">
            <div >
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;