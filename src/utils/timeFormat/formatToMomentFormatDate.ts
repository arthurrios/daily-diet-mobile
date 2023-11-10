export function formatToMomentFormatDate(date: string) {
  const [month, day, year] = date.split('/')

  const formattedDate = String(`${year}-${month}-${day}`)

  return formattedDate
}
