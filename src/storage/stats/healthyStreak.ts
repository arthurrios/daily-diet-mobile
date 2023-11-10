import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { mealsSortByDate } from '@storage/meal/mealsSortByDate'

export async function healthyStreak() {
  const storage = await mealsGetAll()
  const storageSorted = storage.slice().sort(mealsSortByDate)

  let currentSequence: MealStorageDTO[] = []
  let maxSequence: MealStorageDTO[] = []

  for (let i = 0; i < storageSorted.length; i++) {
    const currentObj = storageSorted[i]
    const prevObj = storageSorted[i - 1]
    const currentValue = currentObj.healthy
    const prevValue = prevObj?.healthy

    if (currentValue === true) {
      currentSequence.push(currentObj)
    } else {
      // Reset the sequence if currentValue is false
      currentSequence = []
    }

    if (currentValue === true && prevValue === false) {
      currentSequence = []
    }

    // Update maxSequence if the current sequence is longer
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence
    }
  }

  return maxSequence.length
}
