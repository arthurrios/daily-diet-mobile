import moment from 'moment'

export function getCurrentDateTime() {
  const day = moment().format('DD')
  const month = moment().format('MM')
  const year = moment().format('YYYY')
  const time = moment().format('LT')

  return { day, month, year, time }
}
