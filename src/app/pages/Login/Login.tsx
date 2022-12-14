import React from 'react'
import './Login.scss'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Checkbox, Button, Alert } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '@hooks/useAuth'

const Login = () => {
	const auth = useAuth()
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			email: '', // anton.nozdrin.21@mail.ru
			password: '', // 315220kalter
			remember: false
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Неправильно введена почта!'),
			password: Yup.string().min(8, 'Пароль должен быть не менее 8 символов!')
		}),
		onSubmit: async values => {
			let res = await auth.signIn(
				values.email,
				values.password,
				values.remember
			)
			if (res) navigate('/')
		}
	})

	return (
		<div className='login'>
			<div className='login__wrapper'>
				{auth.error ? (
					<Alert
						message={auth.error}
						type='error'
						style={{ marginBottom: '10px' }}
					/>
				) : null}
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: false
					}}
					onFinish={formik.handleSubmit}
				>
					<Form.Item
						name='email'
						validateStatus={
							formik.touched.email && formik.errors.email ? 'error' : 'success'
						}
						help={formik.touched.email ? formik.errors.email : null}
					>
						<Input
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Почта'
							type='email'
							id='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</Form.Item>
					<Form.Item
						name='password'
						validateStatus={
							formik.touched.password && formik.errors.password
								? 'error'
								: 'success'
						}
						help={formik.touched.password ? formik.errors.password : null}
					>
						<Input.Password
							prefix={<LockOutlined className='site-form-item-icon' />}
							placeholder='Пароль'
							type='password'
							id='password'
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name='remember' valuePropName='checked' noStyle>
							<Checkbox
								id='remember'
								name='remember'
								onChange={formik.handleChange}
							>
								Запомнить меня
							</Checkbox>
						</Form.Item>
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
						>
							Войти
						</Button>
					</Form.Item>

					<Link
						to='/password_reset'
						className='login-form-forgot login__forgot-pass'
					>
						Забыли пароль?
					</Link>
					<Link to='/register'>Зарегистрироваться</Link>
				</Form>
			</div>
		</div>
	)
}

export default Login
