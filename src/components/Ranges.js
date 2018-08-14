import Range from './Range.js'

export default class Ranges {
  constructor (ranges) {
    this.ranges = ranges
  }

  contains (date) {
    for (let k in this.ranges) {
      if (this.ranges[k].contains(date)) {
        return this.ranges[k]
      }
    }
    return null
  }

  addRange (range) {
    this.ranges.push(range)
  }

  static fromTimestamps (ranges) {
    return new Ranges(ranges.map(range => {
      return new Range(new Date(range[0]), new Date(range[1]))
    }))
  }
}
