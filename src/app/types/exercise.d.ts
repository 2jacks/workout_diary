import { IMuscle } from '%types/muscle'

export interface IExercise {
	name: string
	muscles: IMuscle[]
	repeats?: number[]
	weight?: number
	sets?: number
	rest?: number
}
