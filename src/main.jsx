import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import  Home  from "./pages/Home.jsx";
import Learning from "./pages/Learning.jsx";
import Consulting from "./pages/Consulting.jsx";
import Accommodation from "./pages/Accommodation.jsx";
import Convenient from "./pages/Convenient.jsx";
import Community from "./pages/Community.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Learning",
    element: <Learning />,
  },
  {
    path: "/Consulting",
    element: <Consulting />,
  },
  {
    path: "/Accommodation",
    element: <Accommodation />,
  },
  {
    path: "/Convenient",
    element: <Convenient />,
  },
  {
    path: "/Community",
    element: <Community />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
