<template>
  <div class='rangepicker'>
    <div v-for='(month, i) in months'
         :key='`month-${i}`'
         class='rangepicker_month'>

      <div class="rangepicker_month_title">
        {{ month.getName() }}
      </div>

      <div class="rangepicker_month_days">
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
        <div>Dim</div>
      </div>

      <div class="rangepicker_month_numbers">
        <div v-for='(day, i) in month.getDays()'
             :key='`day-of-month-${month.getName()}-${i}`'
             class="rangepicker_day"
             :class="classForDay(day, month, newRange)"
             @mousedown="startDrag(day)"
             @mouseover="overDay(day)">
          {{ day.getDate() }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Month from './Month.js'
import Ranges from './Ranges.js'
import Range from './Range.js'

export default {
  name: 'rangepicker',
  props: {
    year: Number,
    value: Array
  },
  data () {
    return {
      months: [],
      ranges: [],
      newRange: null,
      cursor: 1,
      startDate: null
    }
  },
  mounted () {
    this.months = Month.createMonthForYear(this.year)
    this.ranges = Ranges.fromTimestamps(this.value)
    document.addEventListener('mouseup', this.onRelease)
  },
  destroyed () {
    document.removeEventListener('mouseup', this.onRelease)
  },
  methods: {
    classForDay (day, month, newRange) {
      let classes = []
      let range = this.ranges.contains(day)
      if (range !== null) {
        classes.push('rangepicker_range')
        if (range.isStart(day)) { classes.push('rangepicker_range-start') }
        if (range.isEnd(day)) { classes.push('rangepicker_range-end') }
      }
      if (newRange !== null) {
        if (newRange.contains(day)) {
          classes = ['rangepicker_newrange']
          if (newRange.isStart(day)) { classes.push('rangepicker_range-start') }
          if (newRange.isEnd(day)) { classes.push('rangepicker_range-end') }
        }
      }
      if (!month.contains(day)) {
        classes.push('rangepicker_out')
      }
      return classes
    },
    startDrag (day) {
      this.startDate = day
      this.newRange = new Range(day, day)
    },
    overDay (day) {
      if (this.newRange !== null) {
        try {
          if (this.cursor === 1) {
            this.newRange.setEnd(day)
          } else {
            this.newRange.setStart(day)
          }
        } catch (e) {
          this.cursor = Math.abs(this.cursor - 1)
          this.newRange = new Range(this.startDate, this.startDate)
          this.overDay(day)
        }
      }
    },
    onRelease () {
      if (this.newRange) {
        this.ranges.addRange(this.newRange)
      }
      this.newRange = null
    }
  }
}
</script>

<style src='./rangepicker.scss' lang='scss'></style>
