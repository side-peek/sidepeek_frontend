const checkTime = {
  isSecond: (time: number) => time < 60000,
  isMinute: (time: number) => 60000 <= time && time < 3600000,
  isHour: (time: number) => 3600000 <= time && time < 86400000,
  isDay: (time: number) => 86400000 <= time && time < 2592000000,
  isOverOneMonth: (time: number) => 2592000000 <= time,
}

const calcTime = {
  second: (time: number) => Math.floor(time / 1000),
  minute: (time: number) => Math.floor(time / 60000),
  hour: (time: number) => Math.floor(time / 3600000),
  day: (time: number) => Math.floor(time / 86400000),
}

const dateToTimeago = (date: string) => {
  const formatter = new Intl.RelativeTimeFormat("ko", {
    numeric: "always",
  })

  const passed = +new Date() - +new Date(date)

  if (passed <= 0) {
    return
  }

  if (checkTime.isSecond(passed)) {
    return formatter.format(-calcTime.second(passed), "second")
  }

  if (checkTime.isMinute(passed)) {
    return formatter.format(-calcTime.minute(passed), "minute")
  }
  if (checkTime.isHour(passed)) {
    return formatter.format(-calcTime.hour(passed), "hour")
  }
  if (checkTime.isDay(passed)) {
    return formatter.format(-calcTime.day(passed), "day")
  }
  if (checkTime.isOverOneMonth(passed)) {
    return new Intl.DateTimeFormat("ko", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date))
  }
}

export default dateToTimeago
