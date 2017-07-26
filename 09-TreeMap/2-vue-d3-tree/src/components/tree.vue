<template>
	<div class="viewport treeclass" v-resize = "resize">
		
	</div>
</template>

<script>
	import resize from "vue-resize-directive"
	import euclidean from "./euclidean-layout"
	import circular from "./circular-layout"


	import {compareString , anchorTodx, drawLink, toPromise, findInParents, mapMany, removeTextAndGraph, translate} from './d3-utils'


	import * as d3 from "d3"
	import * as d3Hierarchy from "d3-hierarchy"


	export default{

		name: "tree",
		props: {
			
		}
		data(){
          return {

          };
		},
		mounted () {
			this.render();   //
		}
	}
</script>

<style>
	
</style>