export default class Range {
  constructor (start, end) {
    this.start = start
    this.end = end
  }

  getStart () {
    return this.start
  }

  getEnd () {
    return this.end
  }

  setEnd (date) {
    if (date.getTime() < this.start.getTime()) {
      throw new Error('sart < end')
    }
    this.end = date
  }

  setStart (date) {
    if (date.getTime() > this.end.getTime()) {
      throw new Error('sart > end')
    }
    this.start = date
  }

  contains (date) {
    return date.getTime() >= this.start.getTime() &&
    date.getTime() <= this.end.getTime()
  }

  isStart (date) {
    // console.log('is s', date.toDateString())
    // console.log('is e', this.start.toDateString())
    // console.log('is =', date.toDateString() === this.start.toDateString())
    return date.toDateString() === this.start.toDateString()
  }

  isEnd (date) {
    // console.log('is s', date.toDateString())
    // console.log('is e', this.end.toDateString())
    // console.log('is =', date.toDateString() === this.end.toDateString())
    return date.toDateString() === this.end.toDateString()
  }
}
