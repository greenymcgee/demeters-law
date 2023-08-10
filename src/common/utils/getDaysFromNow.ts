export function getDaysFromNow(days: number): Date {
  const currentDate = new Date()
  return new Date(currentDate.setDate(currentDate.getDate() + days))
}
