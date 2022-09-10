import React from 'react'
import './Page.scss'

import { Divider } from 'antd'

interface PageProps {
	title: string
	extra?: React.ReactNode
	children: React.ReactNode
}
function Page({ title, extra, children }: PageProps) {
	return (
		<section className='page'>
			<div className='page__header'>
				<h2 className='page__title'>{title}</h2>
				<div className='page__extra'>{extra}</div>
			</div>
			<Divider style={{ margin: '10px 0 20px 0' }} />
			<div className='page__content'>{children}</div>
		</section>
	)
}

export default Page
