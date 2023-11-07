import moment from 'moment'

export type MealStorageDTO = {
  name: string
  description: string
  datetime: moment.Moment
  healthy: boolean
}
