import * as React from 'react'
import 'antd/dist/antd.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthContext } from '@contexts/AuthContext/AuthContext'

import PrivateRoute from '@components/PrivateRoute'

import Login from '@pages/Login/Login'
import Register from '@pages/Register/Register'
import PasswordReset from '@pages/PasswordReset/PasswordReset'

import Layout from '@pages/Layout/Layout'
import Main from '@pages/Main/Main'
import Statistics from '@pages/Statistics/Statistics'
import Workouts from '@pages/Workouts/Workouts'
import Exercises from '@pages/Exercises/Exercises'

export const App = () => {
	return (
		<AuthContext>
			<Router>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/password_reset' element={<PasswordReset />} />

					<Route
						path='/'
						element={
							<PrivateRoute>
								<Layout />
							</PrivateRoute>
						}
					>
						<Route index element={<Main />} />
						<Route path='statistics' element={<Statistics />} />
						<Route path='workouts' element={<Workouts />} />
						<Route path='exercises' element={<Exercises />} />
					</Route>
				</Routes>
			</Router>
		</AuthContext>
	)
}
