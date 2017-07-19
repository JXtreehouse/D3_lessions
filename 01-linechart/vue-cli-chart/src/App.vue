<template>
  <div id="app">
    
    <lineChart></lineChart>
  </div>
</template>

<script>
import d3 from "d3"
import lineChart from './components/linechart'

export default {
  name: 'app',
  components: {
    lineChart
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
