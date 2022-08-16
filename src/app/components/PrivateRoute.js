import React, { useEffect } from 'react'
import { useAuth } from '@hooks/auth/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const auth = useAuth()
	const location = useLocation()
	useEffect(() => {
		console.log(auth.user)
	}, [])
	return auth.user ? (
		children
	) : (
		<Navigate to='/login' state={{ from: location }} />
	)
}

export default PrivateRoute
