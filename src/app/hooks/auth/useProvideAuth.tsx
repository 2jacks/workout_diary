import { useState } from 'react'

import { AuthService } from '@services/authService'

export function useProvideAuth() {
	const [user, setUser] = useState(null)

	const signIn = async (
		email: string,
		password: string,
		remember: boolean,
		cb: (res: any, err: Error | null) => void
	) => {
		AuthService.signIn(email, password).then(res => {
			if (!(res instanceof Error)) {
				setUser(res.data)
				cb(res, null)
			} else {
				cb(null, res)
			}
		})
	}

	// const signOut = cb => {
	// 	return fakeAuth.signOut(() => {
	// 		setUser(null)
	// 		cb()
	// 	})
	// }

	return {
		user,
		signIn
		// signOut
	}
}
