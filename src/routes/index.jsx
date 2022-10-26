import Chat from "../pages/Chat";
// // Dashboard
import Dashboard from "../pages/Dashboard/index";
import FindExchanges from "../pages/FindExchanges";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import GroupConversations from "../pages/GroupConversations"
// // Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Profile from "../pages/Profile/Profile";
import React from "react";
import { Redirect } from "react-router-dom";
import Register from "../pages/Authentication/Register";
import Settings from "../pages/Settings/Settings";
// // Profile
import UserProfile from "../pages/Authentication/user-profile";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  //   // //profile
  { path: "/my-profile", component: UserProfile },
  { path: "/profile", component: Profile },
  { path: "/settings", component: Settings },

  { path: "/chat", component: Chat },

  { path: "/find-an-exchange", component: FindExchanges }, 
  { path: "/group-conversations", component: GroupConversations }, 


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
