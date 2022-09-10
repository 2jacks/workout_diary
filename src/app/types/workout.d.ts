import { IMuscle } from '%types/muscle'
import { IExercise } from '%types/exercise'

export interface IWorkout {
	name: string
	muscles: IMuscle[]
	exercises: IExercise[]
	expectedDuration?: number
}
