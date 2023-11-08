/* eslint-disable no-useless-catch */
import { mealsGetAll } from './mealsGetAll'

export async function mealsGetByDate(date: string) {
  try {
    const storage = await mealsGetAll()

    const mealsSameDay = storage.filter((meal) => meal.date === date)

    return mealsSameDay
  } catch (error) {
    throw error
  }
}
