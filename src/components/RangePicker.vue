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
             :class="classForDay(day, month)">
          {{ day.getDate() }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Month from './Month.js'
import Ranges from './Ranges.js'

export default {
  name: 'rangepicker',
  props: {
    year: Number,
    value: Array
  },
  data () {
    return {
      months: [],
      ranges: []
    }
  },
  mounted () {
    this.months = Month.createMonthForYear(this.year)
    this.ranges = Ranges.fromTimestamps(this.value)
  },
  methods: {
    classForDay (day, month) {
      let classes = []
      console.log('aa', this.ranges)
      // if (this.ranges.contains(day)) {
      //   classes.push('rangepicker_range')
      // }
      if (!month.contains(day)) {
        classes.push('rangepicker_out')
      }
      return classes
    }
  }
}
</script>

<style src='./rangepicker.scss' lang='scss'></style>
