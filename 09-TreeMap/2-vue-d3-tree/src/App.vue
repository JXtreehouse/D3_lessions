<template>
  <div id="app">
    
    <Tree></Tree>
    <Bundle></Bundle>
  </div>
</template>

<script>
import Tree from './components/tree'

import Bundle from './components/HierarchicalEdgeBundling'

export default {
  name: 'app',
  components: {
    Tree,
    Bundle
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
