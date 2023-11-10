// import moment from 'moment'

export function formatMomentDate(date: string) {
  // const momentDate = moment(date, 'MM-DD-YYYY')
  const [year, month, day] = date.split('-')

  const yearShort = year.slice(-2)

  const formattedDate = String(`${month}.${day}.${yearShort}`)

  return formattedDate
}
