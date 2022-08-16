export class Validator {
	static validateEmail(email) {
		if (!email) {
			return { error: true, message: 'Введите почту!' }
		}
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			return { error: true, message: 'Неправильно введена почта!' }
		}

		return { error: false, message: null }
	}

	static validatePassword(password) {
		if (!password) {
			return { error: true, message: 'Введите пароль!' }
		}
		if (password.length < 8) {
			return { error: true, message: 'Пароль должен быть длиннее 7 символов!' }
		}

		return { error: false, message: null }
	}
}
