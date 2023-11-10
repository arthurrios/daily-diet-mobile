import moment from 'moment'

export function formatTimeToUS(time: string) {
  const formattedTime = moment(time, 'HH:mm').format('hh:mm a')

  return formattedTime
}
