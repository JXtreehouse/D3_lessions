# vue-cli-chart

>  use d3 in vue for test 

# 说明
- 采用Vue-cli脚手架
- 采用原生D3.js
- 曲线图

# 代码讲解
```
     <template>
       <div id="line"></div>
   </template>
   <script>
      export default {
       name: 'vue-line-chart',//名称
       data() {               //数据
         return {
         data: [[
           {x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7},
           {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4},
           {x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}
            ]]
          };
         },
       mounted() {
         this.render(this.data);  //渲染图表
       },
       props:{                  
         width:500, 
         height:500,
         margin:50
       },
       methods: {
      
       getScales(){ //定义x坐标轴和y坐标轴的尺度
         let width = 500,
           height = 500,
           margin = 50,
           x = d3.scale.linear() //定义x尺度
             .domain([0, 10])
             .range([margin, width - margin]),
           y = d3.scale.linear() //定义y尺度
             .domain([0, 10])
             .range([height - margin, margin]);
         return {x, y,width,height,margin}
       },
       
       
      
       createSvg(){   //创建一个画布,并设置大小
         let svg = d3.select("#line").append("svg").attr("class","axis")
           .attr("height", 500)
           .attr("width", 500);
         return svg
       },
       
       
       
       createPath(svg,x,y,data){  //生成曲线
         let line = d3.svg.line() 
           .x(function (d) {
             return x(d.x);
           })
           .y(function (d) {
             return y(d.y);
           });
        
         
         svg.selectAll("path") //创建svg:path元素
           .data(data)
           .enter()
           .append("path")
           .attr("class", "line")
           .attr("d", function (d) {
             return line(d);
           });
         },
         
         
          function renderXAxis(svg){    //渲染x坐标
           let scale = d3.scale.linear()  //x轴尺度
             .domain([0, 10])
             .range([0, quadrantWidth()]);
 
           let xAxis = d3.svg.axis()  //创建x轴
             .scale(scale)          //设置x轴尺度  
             .orient("bottom");   //设置x轴位置
  
           svg.append("g")            // 移动x轴的位置，保证从原点开始
             .attr("class", "x-axis")
             .attr("transform", function(){ 
               return "translate(" + xStart()
                 + "," + yStart() + ")";
             })
             .call(xAxis);
 
           d3.selectAll("g.x-axis g.tick") // 设置刻度线和网格线
             .append("line") // <-C
             .classed("grid-line", true)
             .attr("x1", 0) // <-D
             .attr("y1", 0)
             .attr("x2", 0)
             .attr("y2", - (quadrantWidth()));  // <-E
         }
        
         function renderYAxis(svg){   //渲染y坐标
           let scale = d3.scale.linear()//y轴尺度
             .domain([10, 0])
             .range([0, quadrantHeight()]);
 
           let yAxis = d3.svg.axis()//创建y轴
             .scale(scale)          //设置y轴尺度 
             .orient("left");      //设置y轴位置  
 
           svg.append("g")       //移动y轴的位置，保证从原点开始
             .attr("class", "y-axis")
             .attr("transform", function(){
               return "translate(" + xStart()
                 + "," + yEnd() + ")";
             })
             .call(yAxis);
           d3.selectAll("g.y-axis g.tick") // 设置刻度线和网格线
             .append("line")
             .classed("grid-line", true)
             .attr("x1", 0)
             .attr("y1", 0)
             .attr("x2", quadrantHeight()) // <-F
             .attr("y2", 0);
         }
        
         render(data){      //渲染总函数
           let {x, y,width,height,margin} = this.getScales();//导入参数
           let svg = this.createSvg();        //导入svg
           this.createPath(svg,x,y,data);    //画线
           renderXAxis(svg);                //渲染x坐标轴
           renderYAxis(svg);               //渲染y坐标轴
          
         
         
         //工具类函数
         function xStart() {
           return margin;
         };
         function yStart() {
           return height - margin;
         };
         function xEnd() {
           return width - margin;
         };
         function yEnd() {
           return margin;
         };
         function quadrantWidth() {
           return width - 2 * margin;
         };
         function quadrantHeight() {
           return height - 2 * margin;
         };
       },
    }
   }
   </script>
  <style>
  ……
  </style>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
