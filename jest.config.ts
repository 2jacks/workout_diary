import type { Config } from 'jest'

const config: Config = {
	verbose: true,
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'^@root(.*)$': '<rootDir>/src$1',
		'^@components(.*)$': '<rootDir>/src/app/components$1',
		'^@pages(.*)$': '<rootDir>/src/app/pages$1',
		'^@services(.*)$': '<rootDir>/src/app/services$1',
		'^@hooks(.*)$': '<rootDir>/src/app/hooks$1',
		'^@utils(.*)$': '<rootDir>/src/app/utils$1',
		'^@contexts(.*)$': '<rootDir>/src/app/contexts$1',
		'^%types(.*)$': '<rootDir>/src/app/types$1',
		'^@models(.*)$': '<rootDir>/src/app/models$1',
		'^@store(.*)$': '<rootDir>/src/app/store$1',
		'^@http(.*)$': '<rootDir>/src/app/http$1'
	}
}

export default config
