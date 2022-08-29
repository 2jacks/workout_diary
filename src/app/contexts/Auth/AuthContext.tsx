import * as React from 'react'
import { createContext, useEffect, useState } from 'react'
import { AuthService } from '@services/authService'

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
 *  4. Ошибки авторизации перенести в AuthContext
 * */

export const authContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function AuthContext({ children }) {
	const auth = getAuth()
	const [user, setUser] = useState(null)
	const [pending, setPending] = useState(true)
	const [error, setError] = useState({ code: null, message: null })

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			setUser(user)
			setPending(false)
		})
	}, [])

	const signIn = (email: string, password: string, remember: boolean) => {
		return setPersistence(
			auth,
			remember ? browserLocalPersistence : browserSessionPersistence
		).then(() => {
			return signInWithEmailAndPassword(auth, email, password)
		})
	}

	const signUp = (email: string, password: string) => {
		createUserWithEmailAndPassword(getAuth(), email, password)
			.then(userCredential => {
				return userCredential.user
			})
			.catch(error => {
				console.log('firebase err', error)
				return new Error(error.message)
			})
	}

	const signOut = () => {
		return firebaseSignOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch(error => {
				console.log(error)
			})
	}

	if (pending) {
		return <div>Loading...</div>
	}

	return (
		<authContext.Provider value={{ user, signIn, signUp, signOut }}>
			{children}
		</authContext.Provider>
	)
}
