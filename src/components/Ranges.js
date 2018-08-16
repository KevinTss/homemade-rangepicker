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
    let merged = this.ranges.reduce((m, r) => {
      if (range.contains(r)) {
        this.removeRange(r)
      } else {
        if (r.intersect(range)) {
          r.merge(range)
          return true
        }
      }
      return m
    }, false)
    if (merged === false) {
      this.ranges.push(range)
    }
  }

  removeRange (range) {
    this.ranges = this.ranges.filter(r => r !== range)
  }

  toTimeStamps () {
    return this.ranges.map(range => {
      return [range.getStart().getTime(), range.getEnd().getTime()]
    })
  }

  static fromTimestamps (ranges) {
    return new Ranges(ranges.map(range => {
      return new Range(new Date(range[0]), new Date(range[1]))
    }))
  }
}
