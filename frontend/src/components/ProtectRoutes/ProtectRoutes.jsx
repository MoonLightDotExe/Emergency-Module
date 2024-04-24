import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
function ProtectRoutes({ isSuccess, Component }) {
  //   const { isSuccess } = useSelector((state) => state.login)
  if (!isSuccess) {
    return <Navigate to='/register' />
  }
  return <Component />
}

export default ProtectRoutes
