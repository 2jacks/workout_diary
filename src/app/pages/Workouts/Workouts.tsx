import React from 'react'
import './Workouts.scss'

import WorkoutCard from '@pages/Workouts/WorkoutCard/WorkoutCard'
import { IWorkout } from '%types/workout'
import Page from '@components/ui/Page/Page'
import { Button } from 'antd'

const mockWorkouts: IWorkout[] = [
	{
		name: 'Грудь бицепс',
		muscles: ['Грудь', 'Трицепс', 'Плечи'],
		expectedDuration: 65,
		exercises: [
			{
				name: 'Жим лежа',
				muscles: ['Грудь', 'Плечи'],
				repeats: [12],
				sets: 5
			},
			{
				name: 'Брусья',
				muscles: ['Грудь', 'Плечи', 'Трицепс'],
				repeats: [10],
				sets: 5,
				rest: 120
			}
		]
	},
	{
		name: 'День спины',
		muscles: ['Спина', 'Бицепс'],
		exercises: [
			{
				name: 'Подтягивания',
				muscles: ['Спина', 'Плечи', 'Бицепс'],
				repeats: [8],
				sets: 5
			},
			{
				name: 'Тяга нижнего блока к животу',
				muscles: ['Спина'],
				repeats: [10, 8, 6, 4, 4],
				sets: 5,
				rest: 120
			}
		]
	}
]

function Workouts() {
	const list = mockWorkouts.map((workout, index) => (
		<WorkoutCard key={index} workout={workout} />
	))

	const extra = <Button>Добавить</Button>
	return (
		<Page title='Тренировки' extra={extra}>
			<div className='workouts-list'>{list}</div>
		</Page>
	)
}

export default Workouts
