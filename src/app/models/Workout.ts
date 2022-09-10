import { IWorkout } from '%types/workout'
import { IMuscle } from '%types/muscle'
import { IExercise } from '%types/exercise'

export class Workout implements IWorkout {
	name: string
	muscles: IMuscle[]
	exercises: IExercise[]
	expectedDuration?: number

	constructor(workout: IWorkout) {
		this.name = workout.name
		this.muscles = workout.muscles
		this.exercises = workout.exercises
		this.expectedDuration = workout.expectedDuration
	}
}
