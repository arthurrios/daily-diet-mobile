import moment from 'moment'

export function formatListDateToMoment(date: string) {
  const [month, day, year] = date.split('.')

  const yearMoment = moment(year, 'YY').format('YYYY')

  const formattedListDate = String(`${yearMoment}-${month}-${day}`)

  return formattedListDate
}
