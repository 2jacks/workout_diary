import axios from 'axios'

export const client = axios.create({
	baseURL:
		'https://workout-diary-1849d-default-rtdb.europe-west1.firebasedatabase.app'
})
