import Account from "./auth/register/reducer"
//Dashboard 
import Dashboard from "./dashboard/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer"
// Front
import Layout from "./layout/reducer"
// Authentication
import Login from "./auth/login/reducer"
import Profile from "./auth/profile/reducer"
//chat
import chat from "./chat/reducer"
import { combineReducers } from "redux"
//contacts
import contacts from "./contacts/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  chat,
  contacts,
  Dashboard,
})

export default rootReducer
