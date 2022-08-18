import axios from 'axios'
import { KEY_PARAM, AUTH_BASE_URL } from '@constants/api'

export class AuthService {
	static async signIn(email: string, password: string) {
		return axios
			.post(AUTH_BASE_URL + `signInWithPassword?${KEY_PARAM}`, {
				email,
				password,
				returnSecureToken: true
			})
			.then(res => res)
			.catch(err => new Error(err.response.data.error.message))
	}
}
