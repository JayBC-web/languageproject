import React, { useEffect } from "react"

import PropTypes from "prop-types"
import { logoutUser } from "../../store/actions"
//redux
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"

const Logout = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logoutUser(props.history))
  }, [dispatch])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Logout)
