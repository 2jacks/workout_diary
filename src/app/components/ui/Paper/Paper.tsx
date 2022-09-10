import React from 'react'

import './Paper.scss'

interface PaperProps {
	children: React.ReactNode
}
function Paper({ children }: PaperProps) {
	return <div className='paper'>{children}</div>
}

export default Paper
