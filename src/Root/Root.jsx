import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;