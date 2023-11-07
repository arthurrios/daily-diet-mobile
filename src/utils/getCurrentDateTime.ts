import moment from 'moment'

export function getCurrentDateTime() {
  const dateTime = moment().format('L')
  const timeUSFormat = moment().format('LT')
  const hourTime = moment().format('HH:mm')

  return { dateTime, timeUSFormat, hourTime }
}
