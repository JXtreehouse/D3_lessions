<template>
	<div id="line"></div>
</template>

<script>
	export default {
		name: 'vue-line-chart', 
		data() {
			return {
				data: [[
		           {x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7},
		           {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4},
		           {x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}
            ]]
			};
		},
		mounted () {
			this.render(this.data);   //渲染图表

		},
		props: {
          width: 500,
          height:500,
          margin:50
		},
		methods : {
			getScales() {//定义线的x坐标和y坐标  尺度（规则） 

				let width = 500,
				    height = 500,
				    margin = 50 ,
				    x = d3.scale.linear() //定义x尺度
				      .domain([0, 10])
				      .range([margin, width - margin]),

				    y = d3.scale.linear() //定义y尺度
				        .domain([0,10])
				        .range([height - margin, margin]);
				return {x, y, width,height,margin}

			},

			createSvg () {//创建一个画布,并设置大小
                let svg = d3.select("#line").append("svg").attr("class","axis")
                    .attr("height",500)
                    .attr("width",500)

                return svg 

			},


			createPath(svg, x, y, data) { //生成曲线
                 let line = d3.svg.line()
                     .x(function (d) {
                     	return x (d.x)
                     })
                     .y(function (d) {
                     	return y(d.y)
                     })
                     

                 svg.selectAll("path")  //创建svg:path元素   
	                 .data(data)
	                 .enter()
	                 .append("path")
	                 .attr("class", "line")
	                 .attr("d", function(d) {
	                 	return line(d);
	                 })
	                 .attr('stroke',"#333")
	                 .attr('fill','none')


			},

			

			renderXAxis(svg,width,height,margin) {//渲染x坐标
				let scale = d3.scale.linear()  //x轴尺度
		             .domain([0, 10])
		             .range([0, width - 2 *margin]);
		 
		        let xAxis = d3.svg.axis()  //创建x轴
		             .scale(scale)          //设置x轴尺度  
		             .orient("bottom");   //设置x轴位置
		  
		        svg.append("g")            // 移动x轴的位置，保证从原点开始
		             .attr("class", "x-axis")
		             .attr("transform", function(){ 
		               return "translate(" + margin
		                 + "," + (height - margin) + ")";
		             })
		             .call(xAxis);
		 
		        d3.selectAll("g.x-axis g.tick") // 设置刻度线和网格线
		             .append("line") // <-C
		             .classed("grid-line", true)
		             .attr("x1", 0) // <-D
		             .attr("y1", 0)
		             .attr("x2", 0)
		             .attr("y2", - (width - 2 *margin));  // <-E
			},

			renderYAxis(svg,width,height,margin){
                let scale = d3.scale.linear()//y轴尺度
		             .domain([10, 0])
		             .range([0,height - 2 * margin]);
		 
		        let yAxis = d3.svg.axis()//创建y轴
		             .scale(scale)          //设置y轴尺度 
		             .orient("left");      //设置y轴位置  
		 
		           svg.append("g")       //移动y轴的位置，保证从原点开始
		             .attr("class", "y-axis")
		             .attr("transform", function(){
		               return "translate(" + margin
		                 + "," + margin+ ")";
		             })
		             .call(yAxis);
		           d3.selectAll("g.y-axis g.tick") // 设置刻度线和网格线
		             .append("line")
		             .classed("grid-line", true)
		             .attr("x1", 0)
		             .attr("y1", 0)
		             .attr("x2", height - 2 * margin) // <-F
		             .attr("y2", 0);
			} ,

			render(data) { //渲染总函数
						let {x, y, width, height, margin}  = this.getScales(); //导入参数 用于画线
						let svg = this.createSvg();   //导入svg
						this.createPath(svg,x,y,data);    //画线
						this.renderXAxis(svg,width,height,margin);                //渲染x坐标轴
		                this.renderYAxis(svg,width,height,margin);               //渲染y坐标轴


						
			}

			

	      
			

		}
	}
</script>

<style>
	
</style>
