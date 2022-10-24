// // Dashboard
import Dashboard from "../pages/Dashboard/index";
import FindExchanges from "../pages/FindExchanges";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
// // Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import React from "react";
import { Redirect } from "react-router-dom";
import Register from "../pages/Authentication/Register";
// // Profile
import UserProfile from "../pages/Authentication/user-profile";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  //   // //profile
  { path: "/profile", component: UserProfile },

  { path: "/find-an-exchange", component: FindExchanges }, 


  //   // this route should be at the end of all other routes
  //   // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
