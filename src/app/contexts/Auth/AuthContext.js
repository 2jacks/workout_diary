import React, { createContext } from 'react'
import { useProvideAuth } from '@hooks/auth/useProvideAuth'

export const authContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function AuthContext({ children }) {
	const auth = useProvideAuth()
	return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
