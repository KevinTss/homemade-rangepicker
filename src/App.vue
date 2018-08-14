<template>
  <div id="app">
    <range-picker :year='2017'
                  v-model='ranges'/>
  </div>
</template>

<script>
import RangePicker from './components/RangePicker.vue'

export default {
  name: 'App',
  data () {
    return {
      ranges: [
        [1500038015000, 1500642815000],
        [1487682815000, 1490102015000]
      ]
    }
  },
  components: {
    RangePicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
