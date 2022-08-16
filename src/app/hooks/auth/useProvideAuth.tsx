import { useState } from 'react'

const fakeAuth = {
	isAuthenticated: false,
	signIn(cb) {
		fakeAuth.isAuthenticated = true
		setTimeout(cb, 100) // fake async
	},
	signOut(cb) {
		fakeAuth.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

export function useProvideAuth() {
	const [user, setUser] = useState(null)

	const signIn = cb => {
		return fakeAuth.signIn(() => {
			setUser('user')
			cb()
		})
	}

	const signOut = cb => {
		return fakeAuth.signOut(() => {
			setUser(null)
			cb()
		})
	}

	return {
		user,
		signIn,
		signOut
	}
}
