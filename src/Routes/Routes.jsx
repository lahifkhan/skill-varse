import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/skills.json"),
      },

      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
