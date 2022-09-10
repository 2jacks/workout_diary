import * as React from 'react'
import { screen, render } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import '@testing-library/jest-dom'
import Layout from '../Layout'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

beforeEach(() => {
	// подготавливаем DOM-элемент, куда будем рендерить
	container = document.createElement('div')
	document.body.appendChild(container)
})

afterEach(() => {
	// подчищаем после завершения
	unmountComponentAtNode(container)
	container.remove()
	container = null
})

let container = null

describe('Шапка или сайдер на главном экране', () => {
	test('Sider in desktop', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Layout />
			</MemoryRouter>,
			container
		)
		expect(screen.getByText<HTMLSelectElement>('Главная')).toBeInTheDocument()
	})
	test('Header in mobile', () => {
		act(() => {
			// eslint-disable-next-line no-global-assign
			window = Object.assign(window, { innerWidth: 500 })
		})
		render(
			<MemoryRouter initialEntries={['/']}>
				<Layout />
			</MemoryRouter>
		)
		expect(
			screen.getByTestId<HTMLSelectElement>('layout-header')
		).toBeInTheDocument()
	})
})
