import Range from './Range.js'

export default class Ranges {
  constructor (ranges) {
    this.ranges = ranges
  }

  contains (date) {
    for (let k in this.ranges) {
      if (
        date.getTime() >= this.ranges[k].getStart().getTime() &&
        date.getTime() <= this.ranges[k].getEnd().getTime()
      ) {
        return this.range[k]
      }
    }
    return null
  }

  static fromTimestamps (ranges) {
    return new Ranges(ranges.map(range => {
      return new Range(new Date(range[0]), new Date(range[1]))
    }))
  }
}
