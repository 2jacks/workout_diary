import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { authContext } from '@contexts/Auth/AuthContext'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const auth = useContext(authContext)
	return auth.user ? children : <Navigate to='/login' />
}

export default PrivateRoute
