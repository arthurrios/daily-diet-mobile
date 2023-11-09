/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { mealsGetAll } from './mealsGetAll'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealDelete(id: string) {
  try {
    const storage = await mealsGetAll()

    const filtered = storage.filter((meal) => meal.id !== id)
    const newStorage = JSON.stringify(filtered)

    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage)
  } catch (error) {
    throw error
  }
}
