import React, { useEffect } from 'react'
import './WorkoutCard.scss'

import { IMuscle } from '%types/muscle'
import { IWorkout } from '%types/workout'

import { Collapse, Tag, Divider, Table } from 'antd'
import ParamRow from '@components/ui/ParamRow/ParamRow'
import { useScreenSize } from '@hooks/useScreenSize'
import Exercise from '@pages/Exercises/Exercise/Exercise'
import { ClockCircleOutlined, DatabaseOutlined } from '@ant-design/icons'
const { Panel } = Collapse

const columns = [
	{
		title: 'Упражнение',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Подходы',
		dataIndex: 'sets',
		key: 'sets'
	},
	{
		title: 'Повторы',
		dataIndex: 'repeats',
		key: 'repeats',
		render: repeats => repeats.map((rep, index) => <Tag key={index}>{rep}</Tag>)
	},
	{
		title: 'Мышцы',
		dataIndex: 'muscles',
		key: 'muscles',
		render: muscles =>
			muscles.map((muscle, index) => <Tag key={index}>{muscle}</Tag>)
	}
]

interface CardHeaderProps {
	name: string
	expectedDuration?: number
	numOfExercises: number
	muscles: IMuscle[]
}
function CardHeader({
	name,
	expectedDuration,
	numOfExercises,
	muscles
}: CardHeaderProps) {
	const musclesList = muscles.map((muscle, index) => (
		<Tag key={index} color='geekblue'>
			{muscle}
		</Tag>
	))

	return (
		<div className='workout__card'>
			<h3>{name}</h3>
			{musclesList}
			<Divider style={{ margin: '15px 0 15px 0' }} />
			<div className='workout__desc'>
				<ParamRow
					name='Кол-во упражнений'
					value={numOfExercises}
					icon={<DatabaseOutlined />}
				/>
				{expectedDuration ? (
					<ParamRow
						name='Продолжительность, мин. '
						value={expectedDuration}
						icon={<ClockCircleOutlined />}
					/>
				) : null}
			</div>
		</div>
	)
}
interface WorkoutCardProps {
	workout: IWorkout
}
function WorkoutCard({ workout }: WorkoutCardProps) {
	useEffect(() => {
		console.log(workout)
	}, [])
	const header = (
		<CardHeader
			name={workout.name}
			numOfExercises={workout.exercises.length}
			muscles={workout.muscles}
			expectedDuration={workout.expectedDuration}
		/>
	)
	const { screenWidth } = useScreenSize()

	let exercisesLayout
	if (screenWidth > 768) {
		exercisesLayout = (
			<Table
				dataSource={workout.exercises}
				columns={columns}
				pagination={false}
			/>
		)
	} else {
		exercisesLayout = workout.exercises.map((exercise, index) => (
			<Exercise key={index} exercise={exercise} />
		))
	}

	return (
		<Collapse>
			<Panel key={1} header={header}>
				{exercisesLayout}
			</Panel>
		</Collapse>
	)
}

export default WorkoutCard
