import React from 'react'
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Components
import Root from "./routes/Root";
import Index from './routes/Index';
import Contact from './routes/Contact'
import Faq from './routes/Faq'


// Routers
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true, element: <Index />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "faq",
                element: <Faq />
            }
        ]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={routes} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();