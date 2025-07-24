import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'index.css';
import App from "/App";
import Dashboard from "/Dashboard";
import About from "/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path:"/", element: <App/>},
    { path:"/dashboard", element: <Dashboard/>},
    { path:"/about", element: <About/>}
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
       <RouterProvider router={(router)}/>
    </StrictMode>
)