import * as React from 'react'
import { Outlet, Routes, Route, Link } from 'react-router-dom'
import Login from '@pages/Login/Login'
import TodayWorkout from '@pages/TodayWorkout/TodayWorkout'

const Main = () => {
	return (
		<div>
			<h1>Main Page</h1>
			<div className='outlet'>
				<Outlet />
			</div>
			<Link to='/overview'>Overview</Link>
		</div>
	)
}

export default Main
