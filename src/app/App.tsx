import * as React from 'react'
import 'antd/dist/antd.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { AuthContext } from '@contexts/Auth/AuthContext'

import Login from '@pages/Login/Login'
import Main from '@pages/Main/Main'

import PrivateRoute from '@components/PrivateRoute'
import Register from '@pages/Register/Register'
import PasswordReset from '@pages/PasswordReset/PasswordReset'
import TodayWorkout from '@pages/TodayWorkout/TodayWorkout'

export const App = () => {
	return (
		<>
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
									<Main />
								</PrivateRoute>
							}
						>
							<Route path='overview' element={<TodayWorkout />} />
						</Route>
					</Routes>
				</Router>
			</AuthContext>
		</>
	)
}
