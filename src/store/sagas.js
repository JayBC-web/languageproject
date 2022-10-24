import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import LayoutSaga from "./layout/saga"
import ProfileSaga from "./auth/profile/saga"
import chatSaga from "./chat/saga"
import contactsSaga from "./contacts/saga";
import dashboardSaga from "./dashboard/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(chatSaga),
    fork(contactsSaga),
    fork(dashboardSaga),
  ])
}
