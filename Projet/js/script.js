
var tabulate = function (data,columns) {
	var div=d3.select("body")
  var table1 = div.append('table').attr("class", 'table table-bordered')
	var thead = table1.append('thead')
	var tbody = table1.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  	.append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    	.append('td')
      .text(function (d) { return d.value })
div.append("br")     
div.append("h3").text("2. Tableau avec design");

  return table1;
}

d3.csv('../fichiers/Election.csv',function (data) {
	var columns = ['Regions','Idy','Madicke','Macky', 'Sonko', "Issa"];
	//console.log(data)
  tabulate(data,columns)
})
var tabulate1 = function (data,columns) {
  var table2 = d3.select('body').append('table').attr("class", 'table table-bordered')
	var thead = table2.append('thead')
	var tbody = table2.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  	.append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    	.append('td')
      .text(function (d) { return d.value })
      .style("background-color",function(d){
      	if (d.value<26500){
      		return "yellow"
      	}
      	else if (d.value<53000){
      		return "orange"
      	}
      	else if (d.value>53000){
      		return 'green'
      	}
      })

  return table2;
}

d3.csv('../fichiers/Election.csv',function (data) {
	var columns = ['Regions','Idy','Madicke','Macky', 'Sonko', "Issa"];
	console.log(data)
  tabulate1(data,columns)
})
