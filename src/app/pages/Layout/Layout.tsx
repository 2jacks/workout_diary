import * as React from 'react'
import './Layout.scss'

import { Layout as AntdLayout, Menu, Button, Drawer, List } from 'antd'
import {
	RiseOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	LeftOutlined,
	RightOutlined
} from '@ant-design/icons'

import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useScreenSize } from '@hooks/useScreenSize'

const { Sider, Content, Header } = AntdLayout

interface menuItem {
	label: string
	key: string
	icon: JSX.Element
	children?: JSX.Element[] | JSX.Element
	type?: string
}

const menuItems: menuItem[] = [
	{
		label: 'Главная',
		key: '',
		icon: <RiseOutlined />
	},
	{
		label: 'Статистика',
		key: 'statistics',
		icon: <RiseOutlined />
	}
]

const Layout = () => {
	const navigate = useNavigate()
	const [current, setCurrent] = useState('')
	const _onLinkClick = e => {
		setCurrent(e.key)
		navigate(`/${e.key}`)
	}

	const [isDrawerVisible, setIsDrawerVisible] = useState(false)
	const onDrawerShow = () => setIsDrawerVisible(true)
	const onDrawerClose = () => setIsDrawerVisible(false)

	const [isSiderCollapsed, setIsSiderCollapsed] = useState(false)
	const toggleSider = () => setIsSiderCollapsed(prev => !prev)

	const [screenX, screenY] = useScreenSize()

	return (
		<AntdLayout
			style={{
				height: '100vh'
			}}
		>
			{screenX > 768 ? (
				<Sider collapsed={isSiderCollapsed}>
					<Menu
						items={menuItems}
						onClick={_onLinkClick}
						theme='dark'
						selectedKeys={[current]}
					/>
					<Button
						icon={isSiderCollapsed ? <RightOutlined /> : <LeftOutlined />}
						shape='circle'
						type='primary'
						className='layout__collapse-button'
						onClick={toggleSider}
					/>
				</Sider>
			) : (
				<Header className='layout__header--mobile'>
					<h2 className='layout__title'>Workout Diary</h2>
					<Button
						icon={
							isDrawerVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
						}
						onClick={onDrawerShow}
					/>
					<Drawer
						title='Менюшко'
						placement='right'
						onClose={onDrawerClose}
						visible={isDrawerVisible}
						contentWrapperStyle={{ maxWidth: '100vw' }}
						bodyStyle={{ padding: '10px 15px 15px' }}
					>
						<List
							dataSource={menuItems}
							renderItem={item => {
								return (
									<NavLink
										to={`/${item.key}`}
										onClick={onDrawerClose}
										className='layout__drawer-link'
									>
										{item.label}
										{item.icon}
									</NavLink>
								)
							}}
						/>
					</Drawer>
				</Header>
			)}

			<Content>
				<div className='content-wrapper'>
					<Outlet />
				</div>
			</Content>
		</AntdLayout>
	)
}

export default Layout
