//Select
var noms=["Idrissa Seck","Madicke Niang","Macky Sall","Ousmane Sonko","Issa Sall"];
var forme=d3.select('body').append("div").attr("id","div").append("div").attr("id","div1");
forme.append('form').append('select').attr("id","select")
.selectAll("option").data(noms).enter().append("option").attr("value",function(d){return d}).text(function(d){return d})
.attr("id",function(d,i){return "cand"+i});
forme.append("div").attr("id","divim").append("img").attr('src',"Idrissa.jpg").attr("id","img").attr("alt","Idrissa Seck").attr("x",0).attr("y",-500);
d3.csv("../fichiers/Election.csv",IS)
function IS (data){
	var election=data;					
	//Parametrage des dimensions
	var margin = {top:20, right:20, bottom:70, left:90},
	width = 800, height = 500;				
	//Mise en place du cadre de dessin
	var svg = d3.select("#div").append("div").attr("id","div2").append("svg")
	.attr("width",width + margin.left + margin.right+420)
	.attr("height",height + margin.top + margin.bottom+30)
	.append("g")
	.attr("transform","translate(" + margin.left + "." + margin.top + ")");
	svg.append("text").text("Capitales régionales").attr("x",250).attr("y",600).style("font-weight","bold")	
	//Photos des candidats	
	var photo=["Idrissa.jpg","Madike1.png","Macky.jpg","Sonko.jpg","issa.jpg"];
	//Couleurs des bars et de la légende
	var couleurs=["green","yellow","#F0A","blue","#F00","pink","purple","greenyellow","#EDA","orange","black","indigo","brown","#AAA"];								
	//Mise en place des axes
	var x = d3.scale.ordinal()
	.rangeRoundBands([0,width-100],0.50);				
	var y = d3.scale.linear()
	.range([height,0]);
	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");				
	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(15);			
	election.forEach(function(d){
		d.Regions = d.Regions;		
		d.Idy=d.Idy;
	});
	
	//Titre d'en haut
	svg.append("text").text('Nombre de voix de '+noms[0]).attr("x",130).attr("y",25).style("font-size","30px").attr("id","titre")
	//JQuery
	$(document).ready(function(){
		//Idrissa
		$("#cand0").click(function(){
			//Text
			$("#titre").text('Nombre de voix de '+noms[0])
		});
		 //Madické
		 $("#cand1").click(function(){
		//Text
			$("#titre").text('Nombre de voix de '+noms[1])
		});
		 //Macky
		 $("#cand2").click(function(){
		//Text
			$("#titre").text('Nombre de voix de '+noms[2])		});
		 //sonko
		  $("#cand3").click(function(){
		//Text
			$("#titre").text('Nombre de voix de '+noms[3])
		});
		  //Issa
		   $("#cand4").click(function(){
		//Text
			$("#titre").text('Nombre de voix de '+noms[4])
		});
	});
	//Valeurs abscisses-ordonnées
	x.domain(election.map(function(d){return d.Regions;}));
	y.domain([0, d3.max(election, function(d){return d.Idy*1.1})]);				
	svg.append("g")
	.attr("class","x_axis")
	.attr("transform","translate(0,"+height+")")
	.call(xAxis)
	.selectAll("text")
	.attr("transform","translate(-10,10) rotate (-25)")
	.style("text-anchor", "end");
					
	svg.append("g")
	.attr("class","y_axis")
	.call(yAxis)
	.attr("height", 2000);
									
	//Representation des données en bande
	var group = svg.append("g");
	group.selectAll("bar")
	.data(election)
	.enter()
	.append("rect")
	.attr("class","bar")
	.transition()
	.duration(1000)
	.attr("x",function(d){return x(d.Regions);})
	.attr("width",x.rangeBand())
	.attr("y",function(d){return y(d.Sonko);})
	.attr("height",function(d,i){return height - y(d.Sonko);})
	.style("fill",function(d,i){
	return(couleurs[i]);
	})
	.transition()
	.duration(1000)
	.attr("y",function(d){return y(d.Idy);})
	.attr("height",function(d,i){return height - y(d.Idy);});	

	var image=group.append("img");
	//Légende

	var legende=svg.append("g");

	legende.selectAll("rect").data(election).enter().append("rect")
	.attr("width",30).attr("height",20).attr("x",width-80)
	.attr("y",function(d,i){return 40+i*40})
	.style("fill",function(d,i){return (couleurs[i])});

	legende.selectAll("text").data(election).enter().append("text")
	.attr("width",50).attr("height",30).attr("x",width-30)
	.attr("y",function(d,i){return 55+i*40})
	.text(function(d,i){return d.Regions});

	//Titre
	legende.append("text").text("Légende:").attr("x",width-100).attr("y",20)
	.style("font-size","20px").style("text-decoration", "underline").style("font-style", "italic");

	document.getElementById("cand0").addEventListener("click", function(){
		document.getElementById("img").src="Idrissa.jpg";
	});
	document.getElementById("cand1").addEventListener("click", function(){
		document.getElementById("img").src="Madike.png"
	});
	document.getElementById("cand2").addEventListener("click", function(){
		document.getElementById("img").src="Macky.jpg"
	});
	document.getElementById("cand3").addEventListener("click", function(){
		document.getElementById("img").src="Sonko.jpg"
	});
	document.getElementById("cand4").addEventListener("click", function(){
		document.getElementById("img").src="issa.jpg"
	});

	//Idrissa Seck
	d3.select("#div").select("form").select("#select").select("#cand0").on("click", function(d){
		d3.select("#div2")
		.selectAll(".bar")
		.transition()
		.duration(1000)
		.attr("x",function(d){return x(d.Regions);})
		.attr("width",x.rangeBand())
		.attr("y",function(d){return y(d.Sonko);})
		.attr("height",function(d,i){return height - y(d.Sonko);})
		.style("fill",function(d,i){
		return(couleurs[i]);
		})
		.transition()
		.duration(1000)
		.attr("y",function(d){return y(d.Idy);})
		.attr("height",function(d,i){return height - y(d.Idy);});

		d3.select(".y_axis").selectAll("g").select("text").text(function(d,i){
			return i*10000;
		})
		
	});
	//Madicke Niang
	d3.select("#div").select("form").select("#select").select("#cand1").on("click", function(d){

		d3.select(".y_axis").selectAll("g").select("text").text(function(d,i){
			return i*500;
		});

		d3.select("#div2")
		.selectAll(".bar")
		.transition()
		.duration(1000)
		.attr("x",function(d){return x(d.Regions);})
		.attr("width",x.rangeBand())
		.attr("y",function(d){return y(d.Idy);})
		.attr("height",function(d,i){return height - y(d.Idy);})
		.style("fill",function(d,i){
		return(couleurs[i]);
		})
		.transition()
		.duration(1000)
		.attr("y",function(d,i){return y((d.Madicke)*20);})
		.attr("height",function(d,i){return height - y((d.Madicke)*20);});

		
	});
	//Macky Sall
	d3.select("#div").select("form").select("#select").select("#cand2").on("click", function(d){

		d3.select(".y_axis").selectAll("g").select("text").text(function(d,i){
			return i*20000;
		});

		d3.select("#div2")
		.selectAll(".bar")
		.transition()
		.duration(1000)
		.attr("x",function(d){return x(d.Regions);})
		.attr("width",x.rangeBand())
		.attr("y",function(d){return y(d.Issa);})
		.attr("height",function(d,i){return height - y(d.Issa);})
		.style("fill",function(d,i){
		return(couleurs[i]);
		})
		.transition()
		.duration(1000)
		.attr("y",function(d){return y((d.Macky)/2);})
		.attr("height",function(d,i){return height - y((d.Macky)/2);});

		
		
	});
	//Ousmane Sonko
	d3.select("#div").select("form").select("#select").select("#cand3").on("click", function(d){
		d3.select("#div2")
		.selectAll(".bar")
		.transition()
		.duration(1000)
		.attr("x",function(d){return x(d.Regions);})
		.attr("width",x.rangeBand())
		.attr("y",function(d){return y(d.Madicke);})
		.attr("height",function(d,i){return height - y(d.Madicke);})
		.style("fill",function(d,i){
		return(couleurs[i]);
		})
		.transition()
		.duration(1000)
		.attr("y",function(d){return y(d.Sonko);})
		.attr("height",function(d,i){return height - y(d.Sonko);});

		d3.select(".y_axis").selectAll("g").select("text").text(function(d,i){
			return i*10000;
		})

		
	});
	//Issa Sall
	d3.select("#div").select("form").select("#select").select("#cand4").on("click", function(d){
		d3.select("#div2")
		.selectAll(".bar")
		.transition()
		.duration(1000)
		.attr("x",function(d){return x(d.Regions);})
		.attr("width",x.rangeBand())
		.attr("y",function(d){return y(d.Sonko);})
		.attr("height",function(d,i){return height - y(d.Sonko);})
		.style("fill",function(d,i){
		return(couleurs[i]);
		})
		.transition()
		.duration(1000)
		.attr("y",function(d){return y((d.Issa)*6.7);})
		.attr("height",function(d,i){return height - y((d.Issa)*6.7);});

		d3.select(".y_axis").selectAll("g").select("text").text(function(d,i){
			return i*1500;
		})
		
	});
}



