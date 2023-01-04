import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom"
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path='/' 
            element={<App/>}
        >
             <Route
                 path='home'
                    element={<Home/>}
             />
                <Route
                    path='about'
                    element={<About/>}
                />
                    <Route
                        path='/stock'
                        element={<Stocks/>}
                     />
        </Route>
    )
);

export default router;