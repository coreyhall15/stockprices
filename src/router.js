import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom"
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import Stocks from "./pages/Stocks";
import { priceLoader } from "./pages/loader";



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
                        loader={priceLoader}

                    
                     />
                     <Route
                     path="/price/:symbol"
                     element={<Price></Price>}
                     loader={priceLoader}/>
        </Route>
    )
);

export default router;