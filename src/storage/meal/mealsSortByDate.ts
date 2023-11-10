import { MealStorageDTO } from './MealStorageDTO'

export function mealsSortByDate(
  item1: MealStorageDTO,
  item2: MealStorageDTO,
): number {
  const dateTime1: Date = new Date(`${item1.date}T${item1.time}`)
  const dateTime2: Date = new Date(`${item2.date}T${item2.time}`)

  // Compare dates
  if (dateTime1 > dateTime2) {
    return -1 // Sort in descending order (most present to past)
  } else if (dateTime1 < dateTime2) {
    return 1
  } else {
    return 0 // Dates are equal, compare other criteria if needed
  }
}
