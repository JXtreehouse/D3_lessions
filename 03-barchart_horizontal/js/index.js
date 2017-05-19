var data = [1,6,4,3,3,8,5,4,3,7],
bar_height = 50,
bar_padding = 10,
height = (bar_height + bar_padding)*data.length,
width = 600;


var scale = d3.scaleLinear()
.domain([0,d3.max(data)])
.range([0,width]);

var svg = d3.select("#container")
.append("svg").attr("width",width).attr("height",height)

var bar = svg.selectAll("g").data(data).enter().append("g").attr("transform",function(d,i){
  return "translate(0,"+i*(bar_height+bar_padding)+")";
})

bar.append("rect").attr("width",function(d){return scale(d);})
.attr("height",bar_height
).style("fill","steelblue")

bar.append("text").text(function(d){return d;}).attr("x",function(d){return scale(d+0.1);}).attr("y",bar_height/2)
