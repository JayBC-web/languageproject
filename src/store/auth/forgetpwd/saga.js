import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import {
  postFakeForgetPwd,
  postJwtForgetPwd,
} from "../../../helpers/fakebackend_helper"
import { userForgetPasswordError, userForgetPasswordSuccess } from "./actions"

// Login Redux States
import { FORGET_PASSWORD } from "./actionTypes"
//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"

const fireBaseBackend = getFirebaseBackend()

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user, history } }) {
  try {
    if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.forgetPassword, user.email)
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "We have sent a reset link to your email, remember to check the spam folder."
          )
        )
      }
    } else if (import.meta.env.VITE_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtForgetPwd, "/jwt-forget-pwd", {
        email: user.email,
      })
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "We have sent a reset link to your email, remember to check the spam folder."
          )
        )
      }
    } else {
      const response = yield call(postFakeForgetPwd, "/fake-forget-pwd", {
        email: user.email,
      })
      if (response) {
        yield put(
          userForgetPasswordSuccess(
            "We have sent a reset link to your email, remember to check the spam folder."
          )
        )
      }
    }
  } catch (error) {
    yield put(userForgetPasswordError(error))
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(FORGET_PASSWORD, forgetUser)
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)])
}

export default forgetPasswordSaga
