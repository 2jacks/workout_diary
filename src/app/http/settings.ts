import axios from 'axios'

const db_instance = axios.create({
	baseURL:
		'https://workout-diary-1849d-default-rtdb.europe-west1.firebasedatabase.app',
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' }
})
