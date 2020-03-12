class ExtDate extends Date {
  static get WdayName () {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }

  static get WdayNameCn () {
    return ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  }

  static get WdayAbbr () {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  }

  static get WdayAbbrCn () {
    return ['日', '一', '二', '三', '四', '五', '六']
  }

  get year () {
    return this.getFullYear()
  }

  get isLeapYear () {
    let year = this.year
    if (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0 || parseInt(year) % 400 === 0) {
      return true
    }
    return false
  }

  get month () {
    return this.getMonth() + 1
  }

  get monthName () {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][this.month - 1]
  }

  get monthNameCn () {
    return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][this.month - 1]
  }

  get monthAbbr () {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][this.month - 1]
  }

  get day () {
    return this.getDate()
  }
  // 一个星期的第几天
  get wday () {
    return this.getDay()
  }

  get wdayName () {
    return this.constructor.WdayName[this.day]
  }

  get wdayNameCn () {
    return this.constructor.WdayNameCn[this.day]
  }

  get wdayAbbr () {
    return this.constructor.WdayAbbr[this.day]
  }

  get wdayAbbrCn () {
    return ExtDate.WdayAbbrCn[this.day]
  }

  get yday () {
    // 一天 86400000s
    return Math.ceil((this - new Date(this.getFullYear(), 0, 1)) / 86400000)
  }

  get hour () {
    return this.getHours()
  }

  get hour12 () {
    return this.hour % 12 > 0 ? this.hour % 12 : 12
  }

  get min () {
    return this.getMinutes()
  }

  get sec () {
    return this.getSeconds()
  }

  get msec () {
    return this.getMilliseconds()
  }

  // 日初
  get atBeginningOfDate () {
    return new this.constructor(this.year, this.month - 1, this.date)
  }
  // 日末
  get atEndOfDate () {
    return new this.constructor(this.year, this.month - 1, this.date, 23, 59, 59)
  }
  // 周初
  get atBeginningOfWeek () {
    let wday = this.wday
    let totalSeconds = this.getTime() - wday * 86400000
    return new this.constructor(totalSeconds)
  }
  // 周末
  get atEndOfWeek () {
    let totalSeconds = this.atBeginningOfWeek.getTime() + 6 * 86400000
    return new this.constructor(totalSeconds).atEndOfDate
  }
  // 月初
  get atBeginningOfMonth () {
    return new this.constructor(this.year, this.month - 1, 1)
  }
  // 月末
  get atEndOfMonth () {
    return new this.constructor(this.year, this.month - 1, 0).atEndOfDate
  }
  // 年初
  get atBeginningOfYear () {
    return new this.constructor(this.year, 0, 1)
  }
  // 月末
  get atEndOfYear () {
    return new this.constructor(this.year, 12, 31).atEndOfDate
  }
  getPreviousDate () {
    return new this.constructor(this.getTime() - 86400000)
  }
  getNextDate () {
    return new this.constructor(this.getTime() + 86400000)
  }

  strftime (dateFormat = '%Y-%M-%d %H:%m:%s') {
    return dateFormat
      // 2018
      .replace(/%?Y+/, () => this.year)
      // (00..99)
      .replace(/%?y+/, () => `${this.year}`.substring(2, 4))
      // (1..12)
      .replace(/%?(_M)+/, () => this.month)
      // (01..12)
      .replace(/%?M+/, () => this.month < 10 ? `0${this.month}` : this.month)
      // January, February ..
      .replace(/%?B+/, () => this.monthName)
      // Jan, Feb ...
      .replace(/%?b+/, () => this.monthAbbr)
      // (1..31)
      .replace(/%?(_d)+/, () => this.day)
      // (01..31)
      .replace(/%?d+/, () => this.day < 10 ? `0${this.day}` : this.day)
      // (0..23)
      .replace(/%?(_H)+/, () => this.hour)
      // (00..23)
      .replace(/%?H+/, () => this.hour < 10 ? `0${this.hour}` : this.hour)
      // (0..12)
      .replace(/%?(_h)+/, () => this.hour12)
      // (00..12)
      .replace(/%?h+/, () => this.hour12 < 10 ? `0${this.hour12}` : this.hour12)
      // (0..59)
      .replace(/%?(_m)+/, () => this.min)
      // (00..59)
      .replace(/%?m+/, () => this.min < 10 ? `0${this.min}` : this.min)
      // (0..59)
      .replace(/%?(_s)+/, () => this.sec)
      // (00..59)
      .replace(/%?s+/, () => this.sec < 10 ? `0${this.sec}` : this.sec)
      // PM, AM
      .replace(/%?P+/, () => this.hour > 12 ? 'PM' : 'AM')
      // pm, am
      .replace(/%?p+/, () => this.hour > 12 ? 'pm' : 'am')
      // ms
      .replace(/%?L+/, () => this.msec)
      // Sunday, Monday...
      .replace(/%?A+/, () => this.wdayName)
      // Sun, Mon...
      .replace(/%?a+/, () => this.wdayAbbr)
      // (1..7)
      .replace(/%?u+/, () => this.wday + 1)
      // (0..6)
      .replace(/%?w+/, () => this.wday)
  }
}

export default ExtDate
