import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      addMeal: undefined
      meal: {
        foodItem: MealStorageDTO
      }
      editMeal: {
        foodItem: MealStorageDTO
      }
    }
  }
}
