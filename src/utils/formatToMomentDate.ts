export function formatToMomentDate(date: string, time: string) {
  const [month, day, year] = date.split('/')

  const formattedDatetime = String(`${year}-${month}-${day} ${time}`)

  return formattedDatetime
}
