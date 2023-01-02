export function dateTimeToTimestamp(date) {
    const newDate = new Date(date)
    return Math.floor(newDate.getTime() / 1000)
}

export function todayToTimestamp() {
    const today = new Date()
    return Math.floor(today.getTime() / 1000)
}

export function daysBackInTimestamp(startDate, numberOfDaysBack) {
    const newStartDate = new Date(startDate)
    return newStartDate.setDate(newStartDate.getDate()-numberOfDaysBack)
}
