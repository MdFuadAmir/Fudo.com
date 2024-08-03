import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Whyfudo from "../Components/Whyfudo/Whyfudo";
import Services from "../Components/Services/Services";
import Menu from "../Components/Menu/Menu";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/whyfudo",
                element:<Whyfudo/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/menu",
                element:<Menu/>
            },
        ]
    }

])
export default router;

