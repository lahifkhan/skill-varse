import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";

import Myprofile from "../Pages/Myprofile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPass from "../Pages/ForgetPass";
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../Pages/Loading";
import PageNotFound from "../Components/PageNotFound";
import AllSkills from "../Pages/AllSkills";
import CourseDetails from "../Pages/CourseDetails";
import DetailsAbout from "../Pages/DetailsAbout";
import AllEvents from "../Pages/AllEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    hydrateFallbackElement: <Loading></Loading>,
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
        element: <CourseDetails></CourseDetails>,
        loader: () => fetch("/skills.json"),
      },

      {
        path: "/myProfile",
        Component: Myprofile,
      },

      {
        path: "/updateProfile",
        Component: UpdateProfile,
      },
      {
        path: "/forgetPass",
        Component: ForgetPass,
      },

      {
        path: "/allSkills",
        Component: AllSkills,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/about",
        Component: DetailsAbout,
      },

      {
        path: "/events",
        Component: AllEvents,
        loader: () => fetch("/event.json"),
      },
    ],
  },

  {
    path: "/*",
    Component: PageNotFound,
  },
]);
