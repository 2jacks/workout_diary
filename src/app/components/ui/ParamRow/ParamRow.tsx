import React from 'react'
import './ParamRow.scss'

interface ParamRowProps {
	name: string
	value: number | string | React.ReactNode
	icon?: React.ReactNode
}
function ParamRow({ name, value, icon }: ParamRowProps) {
	return (
		<div className='param-row'>
			{icon}
			<span className='param-row__name'>{name}</span>
			<span className='param-row__value'>{value}</span>
		</div>
	)
}

export default ParamRow
