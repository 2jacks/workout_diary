import { client } from '@http/http'

export class MuscleService {
	static async getMuscles() {
		return await client.get('/muscles.json')
	}
}
