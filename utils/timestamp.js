module.exports = function timestamp(date) {
  var stampObj = {}
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


  stampObj.year = date.getFullYear()
  stampObj.month = months[date.getMonth()]
  stampObj.day = weekDays[date.getDay()]
  stampObj.date = date.getDate()
  stampObj.hour =  date.getHours()
  stampObj.minute = date.getMinutes()
  stampObj.second = date.getSeconds()

  stampObj.difference = {
    seconds: Math.floor(((new Date().getTime() - date.getTime() ) / 1000))
  }
  stampObj.difference.minutes = Math.floor(stampObj.difference.seconds / 60)
  stampObj.difference.hours = Math.floor(stampObj.difference.minutes / 60)
  stampObj.difference.days = Math.floor(stampObj.difference.hours / 24)
  stampObj.difference.years = Math.floor(stampObj.difference.days / 365)

  if (stampObj.difference.seconds < 60) {
    stampObj.difference.suggestion = stampObj.difference.seconds + ' sekund(er) siden'
    return stampObj
  }

  if (stampObj.difference.minutes < 60) {
    stampObj.difference.suggestion = stampObj.difference.minutes + ' minutt(er) siden'
    return stampObj
  }

  if (stampObj.difference.hours < 24) {
    stampObj.difference.suggestion = stampObj.difference.hours + ' time(r) siden'
    return stampObj

  }

  if (stampObj.difference.days < 365) {
    stampObj.difference.suggestion = stampObj.difference.days + ' dag(er) siden'
    return stampObj
  }

  return stampObj
}
