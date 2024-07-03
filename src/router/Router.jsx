import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/main-layout/MainLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
               index: true,
               element: <Home/> 
            }
        ]
    }
    
]);

export default Router;