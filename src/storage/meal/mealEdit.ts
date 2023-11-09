/* eslint-disable no-useless-catch */
import { MealStorageDTO } from './MealStorageDTO'
import { mealCreate } from './mealCreate'
import { mealDelete } from './mealDelete'

export async function mealEdit(meal: MealStorageDTO) {
  try {
    await mealDelete(meal.id)
    await mealCreate(meal)
  } catch (error) {
    throw error
  }
}
