import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider} from "react-router-dom";


import LoginPage from "./pages/LoginPage.jsx";
import Learning from "./pages/Learning.jsx";
import Internshippage from "./pages/Internshippage.jsx"
import Scholarshippage from "./pages/Scholarshippage.jsx"

import Consulting from "./pages/Consulting.jsx";
import Health from "./pages/Health.jsx"
import General from "./pages/General.jsx"

import Convenient from "./pages/Convenient.jsx";
import Reservationpage from "./pages/Reservationpage.jsx"

import Accommodation from "./pages/Accommodation.jsx";
import ReservationDorm from "./pages/ReservationDorm.jsx";

import Communitypage from "./pages/Communitypage.jsx";
import StudentBoard from "./pages/StudentBoard.jsx"
import PublicBoard from "./pages/PublicBoard.jsx"





const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Learning",
    element: <Learning />,
  },
  {
    path: "/Internshippage",
    element: <Internshippage />,
  },
  {
    path: "/Scholarshippage",
    element: <Scholarshippage />,
  },
  {
    path: "/Consulting",
    element: <Consulting />,
  },
  {
    path: "/Health",
    element: <Health />,
  },
  {
    path: "/General",
    element: <General />,
  },
  {
    path: "/Convenient",
    element: <Convenient />,
  },
  {
    path: "/Reservationpage",
    element: <Reservationpage />,
  },
  {
    path: "/Accommodation",
    element: <Accommodation />,
  },
  {
    path: "/ReservationDorm",
    element: <ReservationDorm />,
  },

  {
    path: "/Communitypage",
    element: <Communitypage />,
  },
  {
    path: "/StudentBoard",
    element: <StudentBoard />,
  },
  {
    path: "/PublicBoard",
    element: <PublicBoard />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
