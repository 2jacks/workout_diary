import React from 'react'
import './Exercise.scss'

import { IExercise } from '%types/exercise'
import { Card, Tag } from 'antd'
import ParamRow from '@components/ui/ParamRow/ParamRow'
import {
	RedoOutlined,
	ThunderboltOutlined,
	ToolOutlined
} from '@ant-design/icons'

interface ExerciseProps {
	exercise: IExercise
}

function Exercise({ exercise }: ExerciseProps) {
	const { name, muscles, repeats, sets, rest } = exercise

	const musclesList = muscles.map((muscle, index) => (
		<>
			<Tag key={index} className='tag'>
				{muscle}
			</Tag>
		</>
	))

	return (
		<div className='exercise__wrapper'>
			<Card>
				<div className='exercise'>
					<h3>{name}</h3>
					<div className='exercise__muscles-list'>
						<ul>{musclesList}</ul>
					</div>
					<div className='exercise__description'>
						<ParamRow
							name='Подходы'
							value={sets}
							icon={<ThunderboltOutlined />}
						/>
						<ParamRow
							name='Повторения'
							value={repeats.join(', ')}
							icon={<RedoOutlined />}
						/>
						<ParamRow
							name='Отдых, сек. '
							value={rest}
							icon={<ToolOutlined />}
						/>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default Exercise
