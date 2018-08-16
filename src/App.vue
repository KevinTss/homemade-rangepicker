<template>
  <div id="app">
    {{ ranges }}
    <button @click='pickerShow'>Select</button>
    <div v-if='isPickerVisible'
         style="position: static; top: 0; left: 0; right: 0; left: 0; overflow: scroll;">
      <range-picker :year='2017'
                    v-model='ranges'
                    @cancel='pickerHide'
                    @submit='pickerHide'/>
    </div>
  </div>
</template>

<script>
import RangePicker from './components/RangePicker.vue'

export default {
  name: 'App',
  data () {
    return {
      isPickerVisible: false,
      ranges: [
        // [1500038015000, 1500642815000],
        // [1487682815000, 1490102015000]
      ]
    }
  },
  components: {
    RangePicker
  },
  methods: {
    pickerShow () {
      this.isPickerVisible = true
    },
    pickerHide () {
      this.isPickerVisible = false
    }
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
