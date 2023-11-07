import moment from 'moment'

export type MealStorageDTO = {
  name: string
  description: string
  date: string
  time: string
  healthy: boolean
  createdAt: moment.Moment
}
