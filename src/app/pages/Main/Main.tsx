import * as React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '@hooks/auth/useAuth'

const Main = () => {
	const auth = useAuth()

	return (
		<div>
			<h1>Main Page</h1>
			<div className='outlet'>
				<Outlet />
			</div>
			<Link to='/overview'>Overview</Link>
			<button onClick={auth.signOut}>Sign Out</button>
		</div>
	)
}

export default Main
