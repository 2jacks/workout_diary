import React, { useState } from 'react'
import { Button, Popover, Modal } from 'antd'

import Page from '@components/ui/Page/Page'
import AddExerciseForm from '@pages/Exercises/AddExerciseForm/AddExerciseForm'
import { PlusCircleOutlined } from '@ant-design/icons'

function Exercises() {
	const [isAddFormOpen, setIsAddFormOpen] = useState(false)
	const closeAddForm = () => setIsAddFormOpen(false)
	const openAddForm = () => setIsAddFormOpen(true)

	const extra = (
		<>
			<Modal visible={isAddFormOpen} onCancel={closeAddForm} footer={false}>
				<AddExerciseForm />
			</Modal>
			<Button
				type='primary'
				icon={<PlusCircleOutlined />}
				onClick={openAddForm}
			>
				Добавить
			</Button>
		</>
	)
	return (
		<Page title='Упражнения' extra={extra}>
			<section className='exercises'>
				<ul className='exercises__list'>1</ul>
			</section>
		</Page>
	)
}

export default Exercises
