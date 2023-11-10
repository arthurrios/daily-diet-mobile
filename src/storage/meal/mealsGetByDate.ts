/* eslint-disable no-useless-catch */
import { formatListDateToMoment } from '@utils/timeFormat/formatListDateToMoment'
import { mealsGetAll } from './mealsGetAll'

export async function mealsGetByDate(date: string) {
  try {
    const formattedDate = formatListDateToMoment(date)

    const storage = await mealsGetAll()

    const mealsSameDay = storage.filter((meal) => meal.date === formattedDate)

    return mealsSameDay
  } catch (error) {
    throw error
  }
}
