import axios from 'axios'
import { KEY_PARAM, AUTH_BASE_URL, SECURE_BASE_URL } from '@constants/api'

export class AuthService {
	static async signIn(email: string, password: string) {
		return axios.post(AUTH_BASE_URL + `signInWithPassword?${KEY_PARAM}`, {
			email,
			password,
			returnSecureToken: true
		})
	}

	static async signUp(email: string, password: string) {
		return await axios.post(AUTH_BASE_URL + `signUp?${KEY_PARAM}`, {
			email,
			password,
			returnSecureToken: true
		})
	}

	static async refreshToken(refresh: string) {
		return axios.post(SECURE_BASE_URL + `token?${KEY_PARAM}`, {
			refresh,
			grant_type: 'refresh_token'
		})
	}

	static async verifyToken(token: string) {
		return axios.post(AUTH_BASE_URL + `signInWithCustomToken?${KEY_PARAM}`, {
			token,
			returnSecureToken: true
		})
	}
}
