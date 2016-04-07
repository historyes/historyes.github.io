var data; // a global
var recorrido = 0;

function verbarras() {
	setTimeout(function () {
		$("#tituloprincipal").css("opacity", "0");
		$("#butnp").css("opacity", "0");
	}, 400);
	setTimeout(function () {
		$(".centrar").css("height", "15px");
		$(".centrar").css("margin-top", "-7.5px");
		$(".centrar").css("width", "0px");
		$(".centrar").css("background-color", "#fff");
		$(".centrar").css("margin-left", "-100px");
		$("#tituloprincipal").css("display", "none");
		$("#butnp").css("display", "none");
	}, 1000);
	setTimeout(function () {
		$(".centrar").css("height", "15px");
		$(".centrar").css("margin-top", "-7.5px");
		$(".centrar").css("transition", "0.7s");
		$(".centrar").css("width", "200px");
	}, 1500);
	setTimeout(function () {
		$(".centrar").css("background-color", "transparent");
	}, 2000);
	setTimeout(function () {
		$(".centrar").css("width", "700px");
		$(".centrar").css("margin-left", "-350px");
		$(".centrar").css("transition", "0s");
	}, 2700);
	setTimeout(function () {
		resultados();
	}, 3000);
}

function next() {
	recorrido++;
	if (recorrido >= 8) {
		d3.json("json/1.json", function (error, json) {
			if (error) return console.warn(error);
			data = json;
			$(".centrar").css("height", data[recorrido]["Dominios Activos"] * 0.5 + 150);
			var ctotal = data[recorrido]["Dominios Activos"] * 0.5;
			ctotal = ctotal + 150;
			$(".centrar").css("margin-top", ctotal / 2 * (-1));
			/*$("<h1 class='text-center titulo blanco'><span id='back' class='fa fa-angle-left' onclick='back();'></span> " + data[recorrido]["FECHA"] + " <span id='next' class='fa fa-angle-right' onclick='next();'></span></h1><br>").prependTo(".centrar");*/
			$("#fecha").html(data[recorrido]["FECHA"]);
			$("#cantidad").html(data[recorrido]["Dominios Activos"] + "  dominios");
			setTimeout(function () {
				$(".barra").css("height", data[recorrido]["Dominios Activos"] * 0.5 + "px");
			}, 0);
		});
	} else {
		d3.json("json/1.json", function (error, json) {
			if (error) return console.warn(error);
			data = json;
			$(".centrar").css("height", data[recorrido]["Dominios Activos"] * 1 + 150);
			var ctotal = data[recorrido]["Dominios Activos"] * 1;
			ctotal = ctotal + 150;
			$(".centrar").css("margin-top", ctotal / 2 * (-1));
			/*$("<h1 class='text-center titulo blanco'><span id='back' class='fa fa-angle-left' onclick='back();'></span> " + data[recorrido]["FECHA"] + " <span id='next' class='fa fa-angle-right' onclick='next();'></span></h1><br>").prependTo(".centrar");*/
			$("#fecha").html(data[recorrido]["FECHA"]);
			$("#cantidad").html(data[recorrido]["Dominios Activos"] + "  dominios");
			setTimeout(function () {
				$(".barra").css("height", data[recorrido]["Dominios Activos"] * 1 + "px");
			}, 0);
		});
	}
}

function back() {
	recorrido--;
	if (recorrido >= 8) {
		d3.json("json/1.json", function (error, json) {
			if (error) return console.warn(error);
			data = json;
			$(".centrar").css("height", data[recorrido]["Dominios Activos"] * 0.5 + 150);
			var ctotal = data[recorrido]["Dominios Activos"] * 0.5;
			ctotal = ctotal + 150;
			$(".centrar").css("margin-top", ctotal / 2 * (-1));
			/*$("<h1 class='text-center titulo blanco'><span id='back' class='fa fa-angle-left' onclick='back();'></span> " + data[recorrido]["FECHA"] + " <span id='next' class='fa fa-angle-right' onclick='next();'></span></h1><br>").prependTo(".centrar");*/
			$("#fecha").html(data[recorrido]["FECHA"]);
			$("#cantidad").html(data[recorrido]["Dominios Activos"] + "  dominios");
			setTimeout(function () {
				$(".barra").css("height", data[recorrido]["Dominios Activos"] * 0.5 + "px");
			}, 0);
		});
	} else {
		d3.json("json/1.json", function (error, json) {
			if (error) return console.warn(error);
			data = json;
			$(".centrar").css("height", data[recorrido]["Dominios Activos"] * 1 + 150);
			var ctotal = data[recorrido]["Dominios Activos"] * 1;
			ctotal = ctotal + 150;
			$(".centrar").css("margin-top", ctotal / 2 * (-1));
			/*$("<h1 class='text-center titulo blanco'><span id='back' class='fa fa-angle-left' onclick='back();'></span> " + data[recorrido]["FECHA"] + " <span id='next' class='fa fa-angle-right' onclick='next();'></span></h1><br>").prependTo(".centrar");*/
			$("#fecha").html(data[recorrido]["FECHA"]);
			$("#cantidad").html(data[recorrido]["Dominios Activos"] + "  dominios");
			setTimeout(function () {
				$(".barra").css("height", data[recorrido]["Dominios Activos"] * 1 + "px");
			}, 0);
		});
	}
}

function resultados() {
	d3.json("json/1.json", function (error, json) {
		if (error) return console.warn(error);
		data = json;
		d3.select(".centrar").append("div")
			.attr("class", "barra")
			.style("height", 0);
		$(".centrar").css("height", data[recorrido]["Dominios Activos"] * 1 + 150);
		var ctotal = data[recorrido]["Dominios Activos"] * 1;
		ctotal = ctotal + 150;
		$(".centrar").css("margin-top", ctotal / 2 * (-1));
		$("<h1 class='text-center titulo blanco'><span id='back' class='fa fa-angle-left' onclick='back();'></span> <b id='fecha'>" + data[recorrido]["FECHA"] + "</b> <span id='next' class='fa fa-angle-right' onclick='next();'></span></h1><br>").prependTo(".centrar");
		setTimeout(function () {
			$(".barra").css("height", data[recorrido]["Dominios Activos"] * 1 + "px");
			$("<p class='text-center texto blanco' id='cantidad'>" + data[recorrido]["Dominios Activos"] + " dominios</p>").appendTo(".centrar");
		}, 100);
	});
}

function openmenu() {
	document.getElementById("simbolomenu").setAttribute("onClick", "javascript: closemenu();");
	setTimeout(function () {
		$(".centrar").css("opacity", "0");
	}, 0);
	setTimeout(function () {
		$("#menu").css('height', $(window).height() + "px");
		$(".centrar").css("display", "none");
	}, 200);
	setTimeout(function () {
		$(".centrar2").css("opacity", "1");
		$("footer").css("color", "#333");
		$("footer a").css("color", "#333");
		$("#butnmenu").html("cerrar");
	}, 700);

}

function closemenu() {
	document.getElementById("simbolomenu").setAttribute("onClick", "javascript: openmenu();");
	setTimeout(function () {
		$(".centrar2").css("opacity", "0");
		$(".centrar").css("display", "block");
	}, 0);
	setTimeout(function () {
		$("#menu").css('height', '0px');
		$("footer").css("color", "#FFF");
		$("footer a").css("color", "#FFF");
		$("#butnmenu").html("menu");
	}, 200);
	setTimeout(function () {
		$(".centrar").css("opacity", "1");
	}, 700);
}

function vanos() {
	recorrido = 0;
	document.getElementById("simbolomenu").setAttribute("onClick", "javascript: openmenu();");
	setTimeout(function () {
		$(".centrar2").css("opacity", "0");
		$(".centrar").css("display", "block");
	}, 0);
	setTimeout(function () {
		$("#menu").css('height', '0px');
		$("footer").css("color", "#FFF");
		$("footer a").css("color", "#FFF");
		$("#butnmenu").html("menu");
	}, 200);
	setTimeout(function () {
		$(".centrar").css("opacity", "1");
	}, 700);
	setTimeout(function () {
		$("#tituloprincipal").css("opacity", "0");
		$("#butnp").css("opacity", "0");
		$(".centrar").html("");
	}, 100);
	setTimeout(function () {
		$(".centrar").css("height", "15px");
		$(".centrar").css("margin-top", "-7.5px");
		$(".centrar").css("width", "0px");
		$(".centrar").css("background-color", "#fff");
		$(".centrar").css("margin-left", "-100px");
		$("#tituloprincipal").css("display", "none");
		$("#butnp").css("display", "none");
	}, 1400);
	setTimeout(function () {
		$(".centrar").css("height", "15px");
		$(".centrar").css("margin-top", "-7.5px");
		$(".centrar").css("transition", "0.7s");
		$(".centrar").css("width", "200px");
	}, 1900);
	setTimeout(function () {
		$(".centrar").css("background-color", "transparent");
	}, 2200);
	setTimeout(function () {
		$(".centrar").css("width", "700px");
		$(".centrar").css("margin-left", "-350px");
		$(".centrar").css("transition", "0s");
	}, 2900);
	setTimeout(function () {
		resultados();
	}, 3200);
}

function vtipos() {

}

function vgeneral() {
	document.getElementById("simbolomenu").setAttribute("onClick", "javascript: openmenu();");
	setTimeout(function () {
		$(".centrar2").css("opacity", "0");
		$(".centrar").css("display", "block");
	}, 0);
	setTimeout(function () {
		$("#menu").css('height', '0px');
		$("footer").css("color", "#FFF");
		$("footer a").css("color", "#FFF");
		$("#butnmenu").html("menu");
	}, 200);
	setTimeout(function () {
		$(".centrar").css("opacity", "1");
	}, 700);
	setTimeout(function () {
		$("#tituloprincipal").css("opacity", "0");
		$("#butnp").css("opacity", "0");
		$(".centrar").html("<svg></svg>");
	}, 100);
	setTimeout(function () {
		$(".centrar").css("height", "15px");
		$(".centrar").css("margin-top", "-7.5px");
		$(".centrar").css("width", "0px");
		$(".centrar").css("background-color", "#fff");
		$(".centrar").css("margin-left", "-425px");
		$("#tituloprincipal").css("display", "none");
		$("#butnp").css("display", "none");
	}, 1400);
	setTimeout(function () {
		$(".centrar").css("height", "400px");
		$(".centrar").css("margin-top", "-200px");
		$(".centrar").css("transition", "0.7s");
		$(".centrar").css("width", "850px");
	}, 1900);
	setTimeout(function () {
		$(".centrar").css("background-color", "transparent");
	}, 2200);
	setTimeout(function () {
		$(".centrar").css("width", "700px");
		$(".centrar").css("margin-left", "-350px");
		$(".centrar").css("transition", "0s");
	}, 2900);
	setTimeout(function () {
		mostrargeneral();
	}, 3200);
}

function dom() {
	return [{
		key: "Dominios.es",
		values: [{
			"label": "1997",
			"value": 7219
    }, {
			"label": "1998",
			"value": 12887
    }, {
			"label": "1999",
			"value": 18859
    }, {
			"label": "2000",
			"value": 29590
    }, {
			"label": "2001",
			"value": 35570
    }, {
			"label": "2002",
			"value": 43476
    }, {
			"label": "2003",
			"value": 71158
    }, {
			"label": "2004",
			"value": 85309
    }, {
			"label": "2005",
			"value": 298600
    }, {
			"label": "2006",
			"value": 507874
    }, {
			"label": "2007",
			"value": 805327
    }, {
			"label": "2008",
			"value": 1082757
    }, {
			"label": "2009",
			"value": 1207832
    }, {
			"label": "2010",
			"value": 1247978
    }, {
			"label": "2011",
			"value": 1458371
    }, {
			"label": "2012",
			"value": 1614149
    }, {
			"label": "2013",
			"value": 1696538
    }, {
			"label": "2014",
			"value": 1755224
    }, {
			"label": "2015",
			"value": 1794866
    }]
  }]
}

function mostrargeneral() {
	nv.addGraph(function () {
		var chart = nv.models.discreteBarChart()
			.x(function (d) {
				return d.label
			}) //Specify the data accessors.
			.y(function (d) {
				return d.value
			})
			.staggerLabels(false) // This automatically
			.tooltips(false) //Don't show tooltips
			.showValues(false) //...instead, show the bar value right on top of each bar.
			.color(['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF']);

		d3.select('.centrar svg')
			.datum(dom())
			.call(chart);

		nv.utils.windowResize(chart.update);

		return chart;
	});
}