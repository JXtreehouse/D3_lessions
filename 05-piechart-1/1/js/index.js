d3.csv("data.csv",type,function(data){
	var width = 400,
	height = 400;

	var svg = d3.select("#container")
	.append("svg")
	.attr("width",width)
	.attr("height",height);

	var g = svg.append("g")
	.attr("transform","translate(200,200)");

	var arc_generator = d3.svg.arc()
	.innerRadius(0)
	.outerRadius(200)
	.startAngle(0)
	.endAngle(120*Math.PI/180);

	g.append('path')
	.attr("d",arc_generator)
});

function type(d){
	d.population = + d.population;
	return d;
}