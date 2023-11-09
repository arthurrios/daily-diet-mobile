export function formatStorageDate(date: string) {
  const [year, month, day] = date.split('-')

  const formattedDate = String(`${month}/${day}/${year}`)

  return formattedDate
}
