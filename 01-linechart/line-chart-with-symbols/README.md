> d3.symbol()

- d3提供的符号的生成器，原理是通过path画出的形状；
- d3提供的符号的生成器，原理是通过path画出的形状；
d3提供了7种不同的的符号： circle, cross, diamond, square, star, triangle, and wye，如下图；对应d3.symbols[n]中n代表的0,1,2,3,4,5,6;

![](http://osgp88fat.bkt.clouddn.com/datav/4147000757-59819a7e9f562_articlex.png)

# 详解


SVG中，有个名叫<clipPath>的元素，人如其名，其专门用来定义剪裁路径

	
```
<defs><!-- 定义 -->
  <clipPath id="clipPath"><!-- 定义剪裁路径 -->
      <rect x="0" y="0" width="80" height="80" /><!-- 路径详细 -->
  </clipPath>
</defs>
```

 [CSS3/SVG clip-path路径剪裁遮罩属性](http://www.zhangxinxu.com/wordpress/2014/12/css3-svg-clip-path/)




> 曲线图标识案例，注意定位symbol的时候要使用translate

```

let n = Math.round(Math.random()*6) 
 enterDot.append("path")
.attr("class","dot")
.attr("transform",function(d){return `translate(${xScale(d.x)},${yScale(d.y)})`})
.attr("d",d3.symbol().type(function (d, i) {
         return d3.symbols[n];
}).size(200))
.style("fill","green")
```
