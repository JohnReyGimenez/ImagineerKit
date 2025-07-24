import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'index.css';
import App from "/App";
import Dashboard from "/Dashboard";
import About from "/About";
import NotFoundPage from "/pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path:"/", element: <App/>},
    { path:"/dashboard", element: <Dashboard/>},
    { path:"/about", element: <About/>},
    { path:"*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
       <RouterProvider router={(router)} />
    </StrictMode>
)