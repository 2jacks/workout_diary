import React, { useState } from 'react'
import { IMuscle } from '%types/muscle'

import { muscles } from '../../../../../__mocks__/data'

import { Button, Cascader, Form, Input } from 'antd'

function AddExerciseForm() {
	const [selectedMuscles, setSelectedMuscles] = useState([])
	const onSelectMuscle = value => {
		setSelectedMuscles(value)
	}
	const flatMuscleList = (): IMuscle[] => {
		return selectedMuscles.map(musclePath => musclePath.slice(-1)).flat()
	}

	return (
		<Form layout='vertical'>
			<Form.Item label='Название' required>
				<Input placeholder='Название' />
			</Form.Item>
			<Form.Item label='Работающие мышцы' required>
				<Cascader
					style={{
						width: '100%'
					}}
					options={muscles}
					onChange={onSelectMuscle}
					multiple
					maxTagCount='responsive'
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' placeholder='Название' onClick={flatMuscleList}>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddExerciseForm
