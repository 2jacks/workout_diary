import { useContext } from 'react'
import { authContext } from '@contexts/Auth/AuthContext'

export function useAuth() {
	return useContext(authContext)
}
