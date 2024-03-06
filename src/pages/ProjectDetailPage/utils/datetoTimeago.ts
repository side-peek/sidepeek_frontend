import { format, register } from "timeago.js"
import koLocale from "timeago.js/lib/lang/ko"

register("ko", koLocale)

const dateToTimeago = (date: string, lang: string = "ko") => {
  return format(date, lang)
}

export default dateToTimeago
