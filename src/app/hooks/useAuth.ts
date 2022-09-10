import { useContext } from 'react'
import { authContext } from '@contexts/AuthContext/AuthContext'

export function useAuth() {
	return useContext(authContext)
}
