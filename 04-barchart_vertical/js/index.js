
d3.csv("../data.csv",type,function(data){
	console.log(data);



var bar_width = 50,
bar_padding = 10,
width = (bar_width + bar_padding)*data.length,
height = 600;


var scale = d3.scaleLinear()
.domain([0,d3.max(data,function(d){return d.population;})])
.range([height,0]);

var svg = d3.select("#container")
.append("svg").attr("width",width).attr("height",height)

var bar = svg.selectAll("g").data(data).enter().append("g").attr("transform",function(d,i){
  return "translate("+i*(bar_width+bar_padding)+",0)";
})

bar.append("rect")
.attr("y",function(d){return scale(d.population);})
.attr("width",bar_width)
.attr("height",function(d){return height - scale(d.population)})
.style("fill","steelblue")

bar.append("text")
.text(function(d){return d.year;})
.attr("y",function(d){return scale(d.population+0.1);})
.attr("x",bar_width/2)

})
function type(d){
	d.population = +d.population;
	return d;

}
