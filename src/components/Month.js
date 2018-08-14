export default class Month {
  constructor (year, month) {
    this.year = year
    this.month = month
    this.start = new Date(this.year, this.month)
  }

  getName () {
    return this.start.toLocaleString('fr-fr', {month: 'long'})
  }

  static createMonthForYear (year) {
    let months = []
    for (let i = 0; i < 12; i++) {
      months.push(new Month(year, i))
    }
    return months
  }
}
