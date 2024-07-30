import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Whyfudo from "../Components/Whyfudo/Whyfudo";

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
            }
        ]
    }

])
export default router;

