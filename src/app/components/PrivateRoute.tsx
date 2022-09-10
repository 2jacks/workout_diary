import React from 'react'
import { useAuth } from '@hooks/useAuth'

import { Navigate } from 'react-router-dom'

interface Props {
	children: React.ReactNode
}

const PrivateRoute = ({ children }: Props): any => {
	const auth = useAuth()
	return auth.user ? children : <Navigate to='/login' />
}

export default PrivateRoute
