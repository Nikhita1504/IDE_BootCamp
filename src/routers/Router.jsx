import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import About from "../about/About";
import Home from "../components/home/Home";
import ChartPage from "../about/ChartPage";
// import ChartPage from "../about/ChartPage"; // Import ChartPage component

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/chart-page', // Define path for ChartPage
                element: <ChartPage/> // Render ChartPage component
            },
        ]
    },
]);

export default router;
