

var margin = {top: 40, right: 20, bottom: 30, left: 30},
    width = 960 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var colors = ["#2c2f78", "#d52027"];    

var formatNumber = d3.format(".1f");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    //.domain([0, 2e6])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");


var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(5)
        .tickSize(-width)
        .tickFormat(d3.format("s"));    

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<span style='color:#fafafa;'>" + d.frequency + "</span>";
  //.html(function(d.frequency) {
   // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  })

var svg = d3.select("#cash-graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

d3.tsv("data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 8)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .style("fill", function(d) {        
            if (d.color === "red") {return "#d52027";}  
            else if (d.color === "blue") {return "#2c2f78";}
          }); 


});

function type(d) {
  d.frequency = +d.frequency;
  return d;
}

function formatCurrency(d) {
  var s = formatNumber(d /1e8);
  return d === y.domain()[1]
      ? "$" + s + " million"
      : s;
}

function make_x_axis() {        
    return d3.svg.axis()
        .scale(x)
         .orient("bottom")
         .ticks(5)
}

function make_y_axis() {        
    return d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
}

