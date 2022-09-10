import { client } from '@http/http'
import { IExercise } from '%types/exercise'

export class ExerciseService {
	static async getDefaultExercises() {
		return await client.get<IExercise[]>('/exercises.json')
	}
	static async createExercise(user, exercise: IExercise) {
		return await client.post(`/users/${user}/exercises.json`, {
			...exercise
		})
	}
	static async getMyExercises(user) {
		return await client.get(`/users/${user}/exercises.json`)
	}
}
