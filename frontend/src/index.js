import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Marriage from "./pages/Marriage";
import Divorce from "./pages/Divorce";
import Domestic from "./pages/Domestic";
import ChildCustody from "./pages/ChildCustody";
import Maintenance from "./pages/Maintenance";
import LiveIn from "./pages/LiveIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/marriage",
    element: <Marriage />,
  },
  {
    path: "/divorce",
    element: <Divorce />,
  },
  {
    path: "/domestic-violence",
    element: <Domestic />,
  },
  {
    path: "/child-custody",
    element: <ChildCustody />,
  },
  {
    path: "/maintenance",
    element: <Maintenance />,
  },
  {
    path: "/live-in-relationship",
    element: <LiveIn />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
