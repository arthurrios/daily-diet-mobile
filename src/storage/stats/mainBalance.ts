import { mealsGetAll } from '@storage/meal/mealsGetAll'

export async function mainBalance() {
  const storage = await mealsGetAll()

  const healthyMeals = storage.filter((meal) => meal.healthy === true)
  const unhealthyMeals = storage.filter((meal) => meal.healthy === false)

  let healthStatus

  const mealsTotal = storage.length
  const healthyMealsQuantity = healthyMeals.length
  const unhealthyMealsQuantity = unhealthyMeals.length

  const healthBalance = healthyMealsQuantity / mealsTotal

  if (healthBalance >= 0.7) {
    healthStatus = true
  } else {
    healthStatus = false
  }

  return {
    healthStatus,
    healthBalance,
    healthyMealsQuantity,
    unhealthyMealsQuantity,
    mealsTotal,
  }
}
