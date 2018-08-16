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

  contains (range) {
    if (range instanceof Date) {
      let date = range
      return date.getTime() >= this.start.getTime() &&
             date.getTime() <= this.end.getTime()
    } else if (range instanceof Range) {
      return range.getStart().getTime() > this.start.getTime() &&
             range.getEnd().getTime() < this.end.getTime()
    } else {
      throw new Error('Type inconnu')
    }
  }

  intersect (range) {
    return this.contains(range.getStart()) ||
           this.contains(range.getEnd()) ||
           (
             range.getStart().getTime() < this.start.getTime() &&
             range.getEnd().getTime() > this.end.getTime()
           )
  }

  merge (range) {
    if (range.getStart().getTime() < this.start.getTime()) {
      this.setStart(range.getStart())
    }
    if (range.getEnd().getTime() > this.end.getTime()) {
      this.setEnd(range.getEnd())
    }
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
