import * as React from 'react'
import { createRoot } from 'react-dom/client'

import { initializeApp } from 'firebase/app'

import './styles.scss'

import { App } from '@components/App'

const firebaseConfig = {
	apiKey: 'AIzaSyBfkdZuqaK4YLMSdcxLe1eEjj7wdw33_xE',
	authDomain: 'workout-diary-1849d.firebaseapp.com',
	databaseURL:
		'https://workout-diary-1849d-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'workout-diary-1849d',
	storageBucket: 'workout-diary-1849d.appspot.com',
	messagingSenderId: '954879722053',
	appId: '1:954879722053:web:fdfe11633d9fdf7ddd592c'
}

const app = initializeApp(firebaseConfig)

const appContainer = document.getElementById('app-root')
const root = createRoot(appContainer)
root.render(<App />)
