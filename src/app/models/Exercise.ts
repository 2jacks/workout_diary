import { IExercise } from '%types/exercise'
import { IMuscle } from '%types/muscle'

export class Exercise implements IExercise {
	name: string
	muscles: IMuscle[]
	repeats?: number[]
	weight?: number
	sets?: number
	rest?: number

	constructor(exercise: IExercise) {
		this.name = exercise.name
		this.muscles = exercise.muscles
		this.repeats = exercise.repeats
		this.weight = exercise.weight
		this.sets = exercise.sets
		this.rest = exercise.rest
	}
}
