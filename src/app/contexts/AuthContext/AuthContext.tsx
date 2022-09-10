import * as React from 'react'
import { createContext, useEffect, useState } from 'react'
import { ERRORS } from '@constants/http'

import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut as firebaseSignOut,
	setPersistence,
	browserLocalPersistence,
	browserSessionPersistence
} from 'firebase/auth'

/*
 * TODO:
 *  1. Перенести запросы в сервис
 *  2. Изолировать обработку ошибок
 *  3. Изолировать Firebase
 *  4. Ошибки авторизации перенести в AuthContext --
 * */

export const authContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function AuthContext({ children }) {
	const auth = getAuth()
	const [user, setUser] = useState(null)
	const [pending, setPending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			setUser(user)
			setPending(false)
		})
	}, [])

	const signIn = async (email: string, password: string, remember: boolean) => {
		return await setPersistence(
			auth,
			remember ? browserLocalPersistence : browserSessionPersistence
		).then(() => {
			return signInWithEmailAndPassword(auth, email, password)
				.then(result => {
					setError(null)
					return result
				})
				.catch(error => {
					setError(ERRORS[error.code] || error.code)
				})
		})
	}

	const signUp = (email: string, password: string) => {
		createUserWithEmailAndPassword(getAuth(), email, password)
			.then(userCredential => {
				return userCredential.user
			})
			.catch(error => {
				return new Error(error.message)
			})
	}

	const signOut = () => {
		firebaseSignOut(auth)
			.then(() => {
				console.log('Signed Out')
			})
			.catch(error => {
				console.log(error)
			})
	}

	if (pending) {
		return <div>Loading...</div>
	}

	return (
		<authContext.Provider value={{ user, signIn, signUp, signOut, error }}>
			{children}
		</authContext.Provider>
	)
}
