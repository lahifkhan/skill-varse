import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layouts from "../Layouts/Layouts";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import SkillsDetails from "../Pages/SkillsDetails";
import Myprofile from "../Pages/Myprofile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPass from "../Pages/ForgetPass";
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../Pages/Loading";

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
        element: (
          <PrivateRoutes>
            <SkillsDetails></SkillsDetails>
          </PrivateRoutes>
        ),
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
    ],
  },

  {
    path: "/*",
    element: <p>404 page not found</p>,
  },
]);
