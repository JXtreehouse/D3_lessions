/**
* core modules
**/

//d3 components

d3.components = {};

//default plotting options  

d3.defaultOptions = {
	id: 'chart',
	denderer: 'svg',
	standalone: true,
	responsive:true,
	width: 400,
	height:250,
	aspectRadio: 0.618034,
	color:'#1f77b4',
	colorScheme: d3.schemeCategory10,
	stroke:'none',
	strokeWidth:1,
	fontSize: 14,
	lineHeight:20,
	title: {
		show: false,
		x: '50%',
		y: '1.6em',
		height:'2em',
		wrapText: 'true',
		wraoWidth: '90%',
		lineHeight:'2em',
		stroke: 'none',
		fill: 'currentColor',
		fontsize: '1.4em',
		fontWeight: 'bold',
		textAnchor: 'middle',
		text: ''
	},
	tooltip: {
		show: true,
		autoplay:false,
		carousel: {
			delay:2000,
			interval:2000
		},

		html: function (d,i) {
			return 'Datum' + i;
		},
		style: {
			display: 'none',
			boxSizing: 'border-box',
			position: 'absolute',
			pointerEvents: 'none',
			padding: '0.2em 0.6em',
			backgroundColor: "#fff",
			border: '1px solid #999',
			borderRadius: '02em',
			color: '#333',
			fontSize:'85%',
			opacity:0.8
		}

	},
	legend: {
		autoplay: false,
		carousel: {
			delay:2000;,
			interval:2000
		},
		type: 'checkbox',
		display: 'block',
		maxWidth: '6.8em',
		colums: 5,
		symbol: {
			shape: 'rect'
		}

	}

}



