export default class Month {
  constructor (year, month) {
    this.year = year
    this.month = month
    this.start = new Date(this.year, this.month)
  }

  getDays () {
    let days = []
    // FIND DAYS OF PREVIOUS MONTH
    // index du jours de la semaine (0 à 6 avec 0 = dimanche)
    let dayOfWeek = this.start.getDay() - 1 === -1 ? 6 : this.start.getDay() - 1
    // si le jours de la semaine n'est pas un lundi
    if (dayOfWeek > 0) {
      for (let i = dayOfWeek; i > 0; i--) {
        let date = this.clone(this.start)
        date.setDate(i * -1 + 1)
        days.push(date)
      }
    }
    // FIND DAYS OF CURRENT MONTH
    // clone date de départ
    let end = this.clone(this.start)
    // on va un mois en avant
    end.setMonth(end.getMonth() + 1)
    // on recule d'un jour
    end.setDate(0)
    for (let i = 0; i < end.getDate(); ++i) {
      let date = this.clone(this.start)
      date.setDate(i + 1)
      days.push(date)
    }
    // FIND DAYS OF NEXT MONTH
    // index du jours de la semaine (0 à 6 avec 0 = dimanche)
    dayOfWeek = end.getDay() - 1 === -1 ? 6 : end.getDay() - 1
    if (dayOfWeek < 6) {
      for (let i = 0; i < (6 - dayOfWeek); i++) {
        let date = this.clone(end)
        date.setDate(end.getDate() + i + 1)
        days.push(date)
      }
    }
    return days
  }

  getName () {
    return this.start.toLocaleString('fr-fr', {month: 'long'})
  }

  contains (date) {
    return date.getMonth() === this.month
  }

  clone (date) {
    return new Date(date.getTime())
  }

  static createMonthForYear (year) {
    let months = []
    for (let i = 0; i < 12; i++) {
      months.push(new Month(year, i))
    }
    return months
  }
}
