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
        1
      </div>

    </div>
  </div>
</template>

<script>
import Month from './Month.js'

export default {
  name: 'rangepicker',
  props: {
    year: Number
  },
  data () {
    return {
      months: []
    }
  },
  mounted () {
    this.months = Month.createMonthForYear(this.year)
  }
}
</script>

<style src='./rangepicker.scss' lang='scss'></style>
