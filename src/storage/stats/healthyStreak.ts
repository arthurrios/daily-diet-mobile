import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealsGetAll } from '@storage/meal/mealsGetAll'

export async function healthyStreak() {
  const storage = await mealsGetAll()

  let currentSequence: MealStorageDTO[] = []
  let maxSequence: MealStorageDTO[] = []

  for (let i = 0; i < storage.length; i++) {
    const currentObj = storage[i]
    const prevObj = storage[i - 1]
    const currentValue = currentObj.healthy

    if (currentValue === true) {
      currentSequence.push(currentObj)
    } else {
      // Reset the sequence if currentValue is false
      currentSequence = []
    }

    if (currentValue === true && prevObj.healthy === false) {
      currentSequence = []
    }

    // Update maxSequence if the current sequence is longer
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence
    }
  }

  return maxSequence.length
}
