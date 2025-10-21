import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
