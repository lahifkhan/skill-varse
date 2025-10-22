import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import SkillsDetails from "../Pages/SkillsDetails";

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

      {
        path: "/logIn",
        Component: LogIn,
      },

      {
        path: "/skills/:skillId",
        Component: SkillsDetails,
        loader: () => fetch("/skills.json"),
      },
    ],
  },
]);
