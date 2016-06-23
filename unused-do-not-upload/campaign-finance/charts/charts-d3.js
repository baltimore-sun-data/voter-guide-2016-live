/*
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


/////DONUT CHART/////

var w = 570;
var h = 570;
var r = 200;
var ir = 120;
var textOffset = 14;
var tweenDuration = 1250;

var colorArray = ["#330099", "#6600cc", "#9966ff", "#cc99ff", "#cc66ff", "#9900cc", "#660099"];

//OBJECTS TO BE POPULATED WITH DATA LATER
var lines, valueLabels, nameLabels;
46890.77
var brownData = [{type: "Salaries", money: 2155465}, {type: "Rent", money: 241676},{type: "Media", money: 6305795},{type: "Printing", money: 168567},{type: "Mailings", money: 1020754},{type: "Fundraising", money: 677218},{type: "Other", money: 691853}];

var ganslerData = [{"type":"Salaries","money":1090038},{"type":"Rent","money":104897},{"type":"Media","money":5447642},{"type":"Printing","money":180176},{"type":"Mailing","money":345427},{"type":"Fundraising","money":188024},{"type":"Other","money":148246}];

var mizeurData = [{"type":"Salaries","money":1091768},{"type":"Rent","money":108664},{"type":"Media","money":1382311},{"type":"Printing","money":17769},{"type":"Mailing","money":14000},{"type":"Fundraising","money":97561},{"type":"Other","money":40348}];

var hoganData = [{"type":"Salaries","money":317434},{"type":"Rent","money":78850},{"type":"Media","money":633112},{"type":"Printing","money":50232},{"type":"Mailing","money":385123},{"type":"Fundraising","money":32791},{"type":"Other","money":370555}];

var craigData = [{"type":"Salaries","money":328389},{"type":"Rent","money":26890},{"type":"Media","money":61588},{"type":"Printing","money":64014},{"type":"Mailing","money":185528},{"type":"Fundraising","money":67647},{"type":"Other","money":289568}];

var georgeData = [{"type":"Salaries","money":85160},{"type":"Rent","money":10111},{"type":"Media","money":10996},{"type":"Printing","money":41377},{"type":"Mailing","money":15916},{"type":"Fundraising","money":53075},{"type":"Other","money":25103}];

var lollarData = [{"type":"Salaries","money":8606},{"type":"Rent","money":18132},{"type":"Media","money":22678},{"type":"Printing","money":40856},{"type":"Mailing","money":50},{"type":"Fundraising","money":23246},{"type":"Other","money":35203}];

function populate_percentages(name){

  var total = 0;
  for (var i = 0; i < 7; i++){
    total += window[name+"Data"][i].money;
  }

  var salary = round_number(window[name+"Data"][0].money/total*100);
  var rent = round_number(window[name+"Data"][1].money/total*100);
  var media = round_number(window[name+"Data"][2].money/total*100);
  var printing = round_number(window[name+"Data"][3].money/total*100);
  var mailings = round_number(window[name+"Data"][4].money/total*100);
  var fundraising = round_number(window[name+"Data"][5].money/total*100);
  var other = round_number(window[name+"Data"][6].money/total*100);


  $("#salary-percent").html(salary+"%");
  $("#rent-percent").html(rent+"%");
  $("#media-percent").html(media+"%");
  $("#printing-percent").html(printing+"%");
  $("#mailings-percent").html(mailings+"%");
  $("#fundraising-percent").html(fundraising+"%");
  $("#other-percent").html(other+"%");


}

function round_number(num){
    return Math.round((num + 0.00001) * 100) / 100;
}

////INFO ARRAYS////

var info = 
[{"candidate":"brown","committee":"Friends of Anthony Brown; Brown-Ulman for Maryland","available":"$4.1 million","spent":"$4.2 million","text":"Democrat Anthony G. Brown is raising money for his campaign for governor at a torrid pace, raking in more than $1.2 million in the six weeks after the General Assembly session ended in April, according to his campaign. The lieutenant governor's campaign said May 27 that it has $4.15 million in cash on hand, money that can pay for a sustained TV ad campaign in the four weeks before the June 24 primary.","link":"http://data.baltimoresun.com/voter-guide/candidates/brown.html"},
{"candidate":"gansler","committee":"Friends of Doug Gansler and Jolene Ivey; Friends of Doug Gansler","available":"$3.1 million","spent":"$3.5 million","text":"Until the January report, Gansler had the most money, largely on the strength of funds carried over from his unopposed 2010 re-election bid for attorney general. His campaign stated May 27 that the attorney general raised a little more than $311,000 since April 8.","link":"http://data.baltimoresun.com/voter-guide/candidates/gansler.html"},
{"candidate":"mizeur","committee":"Mizeur-Coates for Maryland, Friends of Heather Mizeur","available":"$961,000","spent":"$366,000","text":"Within the limits of the public financing system, Heather Mizeur's campaign has shown considerable ability to pull in small donations from individual voters. As of May 20, she had received almost $600,000 in public funds, meaning she had raised an equal amount in gifts of $250 or less.","link":"http://data.baltimoresun.com/voter-guide/candidates/mizeur.html"},
{"candidate":"craig","committee":"Craig-Haddaway for Maryland","available":"$144,000*","spent":"$153,000","text":"Harford County Executive David R. Craig, who has struggled to raise money since becoming the first Republican to announce for governor last year, once again posted anemic returns. He raised about $147,000 since the last report — less money than he spent during the period — and closed with about $144,000 in the bank.<br /><br />*Some in escrow","link":"http://data.baltimoresun.com/voter-guide/candidates/craig.html"},
{"candidate":"george","committee":"Committee to Elect Ron George; Ron George - Shelley Aloi for Maryland","available":"$40,000","spent":"$44,500","text":"Del. Ron George of Anne Arundel County raised $68,000 since the legislative session ended April 7 and had $40,000 in cash on hand. George said he decided not to raise money during the session though, as a candidate for public financing, he was eligible to seek small donations.","link":"http://data.baltimoresun.com/voter-guide/candidates/george.html"},
{"candidate":"hogan","committee":"Hogan - Rutherford Committee to Change Maryland","available":"$389,000","spent":"$675,192","text":"Former Ehrlich administration official Larry Hogan took a commanding lead in the money race, out-raising his closest rival by more than 3 to 1 since entering the race in January.","link":"http://data.baltimoresun.com/voter-guide/candidates/hogan.html"},
{"candidate":"lollar","committee":"Charles Lollar for Governor","available":"$18,000","spent":"$39,500","text":"Charles Lollar, a business executive from Charles County, continued to lag far behind his rivals. He reported having $18,000 on hand after raising $55,000 since January — numbers more typical of a delegate's race than a statewide contest.","link":"http://data.baltimoresun.com/voter-guide/candidates/lollar.html"}];


var pieData = [];
var oldPieData = [];
var filteredPieData = [];

//D3 helper function to populate pie slice parameters from array data
var donut = d3.layout.pie().value(function(d){
  return d.money;
});


//D3 helper function to create colors from "colorArray"
//var color = d3.scale.ordinal()
  //.range(colorArray);


//D3 helper function to create colors from an ordinal scale
var color = d3.scale.category20();

//D3 helper function to draw arcs, populates parameter "d" in path object
var arc = d3.svg.arc()
  .startAngle(function(d){ return d.startAngle; })
  .endAngle(function(d){ return d.endAngle; })
  .innerRadius(ir)
  .outerRadius(r);

///////////////////////////////////////////////////////////
// CREATE VIS & GROUPS ////////////////////////////////////
///////////////////////////////////////////////////////////

var vis = d3.select("#donut-chart-container").append("svg:svg")
  .attr("width", w)
  .attr("height", h);

//GROUP FOR ARCS/PATHS
var arc_group = vis.append("svg:g")
  .attr("class", "arc")
  .attr("transform", "translate(" + (w/2) + "," + (h/2) + ")");

//GROUP FOR LABELS
var label_group = vis.append("svg:g")
  .attr("class", "label_group")
  .attr("transform", "translate(" + (w/2) + "," + (h/2) + ")");

//GROUP FOR CENTER TEXT  
var center_group = vis.append("svg:g")
  .attr("class", "center_group")
  .attr("transform", "translate(" + (w/2) + "," + (h/2) + ")");

//PLACEHOLDER GRAY CIRCLE
var paths = arc_group.append("svg:circle")
    .attr("fill", "#EFEFEF")
    .attr("r", r);

///////////////////////////////////////////////////////////
// CENTER TEXT ////////////////////////////////////////////
///////////////////////////////////////////////////////////

//WHITE CIRCLE BEHIND LABELS
var whiteCircle = center_group.append("svg:circle")
  .attr("fill", "white")
  .attr("r", ir);

// "TOTAL" LABEL
var totalLabel = center_group.append("svg:text")
  .attr("class", "label")
  .attr("dy", -15)
  .attr("text-anchor", "middle") // text-align: right
  .text("TOTAL SPENT");

//TOTAL TRAFFIC VALUE
var totalValue = center_group.append("svg:text")
  .attr("class", "total")
  .attr("dy", 7)
  .attr("text-anchor", "middle") // text-align: right
  .text("Waiting...");




///////////////////////////////////////////////////////////
// STREAKER CONNECTION ////////////////////////////////////
///////////////////////////////////////////////////////////

//var updateInterval = window.setInterval(update, 0);

// to run each time data is generated
var counter = 1;

function update_donut(newData) {

  if (counter === 2){
      oldPieData = filteredPieData;
  } else {
    oldPieData = donut(newData);
    oldPieData = oldPieData.filter(filterData);
    counter = 2;           
  }


  pieData = donut(newData);

  var totalMoney = 0;

  filteredPieData = pieData.filter(filterData);

  function filterData(element, index, array) {
    element.name = newData[index].type;
    element.value = newData[index].money;
    totalMoney += element.value;
    return (element.value > 0);
  }

  if(filteredPieData.length > 0 && oldPieData.length > 0){2
    //REMOVE PLACEHOLDER CIRCLE
    arc_group.selectAll("circle").remove();

    totalValue.text(function(){
      var formattedTotal = numberWithCommas(totalMoney);
      var cutoff = formattedTotal.indexOf(".") + 3;
      console.log(cutoff);
      if (cutoff === 2){
       return "$"+formattedTotal;
      } else {
       return "$"+formattedTotal.substring(0,cutoff);
      }
    });

    //DRAW ARC PATHS
    paths = arc_group.selectAll("path").data(filteredPieData);
    paths.enter().append("svg:path")
      .attr("stroke", "white")
      .attr("stroke-width", 0.5)
      .attr("fill", function(d, i) { return color(i); })
      .transition()
        .duration(tweenDuration)
        .attrTween("d", pieTween);
    paths
      .transition()
        .duration(tweenDuration)
        .attrTween("d", pieTween);
    paths.exit()
      .transition()
        .duration(tweenDuration)
        .attrTween("d", removePieTween)
      .remove();

    //DRAW TICK MARK LINES FOR LABELS
    lines = label_group.selectAll("line").data(filteredPieData);
    lines.enter().append("svg:line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", -r-3)
      .attr("y2", -r-8)
      .attr("stroke", "white")
      .attr("transform", function(d) {
        return "rotate(" + (d.startAngle+d.endAngle)/2 * (180/Math.PI) + ")";
      });
    lines.transition()
      .duration(tweenDuration)
      .attr("transform", function(d) {
        return "rotate(" + (d.startAngle+d.endAngle)/2 * (180/Math.PI) + ")";
      });
    lines.exit().remove();

    //DRAW LABELS WITH PERCENTAGE VALUES
    valueLabels = label_group.selectAll("text.value").data(filteredPieData)
      .attr("dy", function(d){
        if ((d.startAngle+d.endAngle)/2 > Math.PI/2 && (d.startAngle+d.endAngle)/2 < Math.PI*1.5 ) {
          return 5;
        } else {
          return -7;
        }
      })
      .attr("text-anchor", function(d){
        if ( (d.startAngle+d.endAngle)/2 < Math.PI ){
          return "beginning";
        } else {
          return "end";
        }
      })
      .text(function(d){
        var percentage = (d.value/totalMoney)*100;
        return percentage.toFixed(1) + "%";
      });

    valueLabels.enter().append("svg:text")
      .attr("class", "value")
      .attr("transform", function(d) {
        return "translate(" + Math.cos(((d.startAngle+d.endAngle - Math.PI)/2)) * (r+textOffset) + "," + Math.sin((d.startAngle+d.endAngle - Math.PI)/2) * (r+textOffset) + ")";
      })
      .attr("dy", function(d){
        if ((d.startAngle+d.endAngle)/2 > Math.PI/2 && (d.startAngle+d.endAngle)/2 < Math.PI*1.5 ) {
          return 5;
        } else {
          return -7;
        }
      })
      .attr("text-anchor", function(d){
        if ( (d.startAngle+d.endAngle)/2 < Math.PI ){
          return "beginning";
        } else {
          return "end";
        }
      }).text(function(d){
        var percentage = (d.value/totalMoney)*100;
        return percentage.toFixed(1) + "%";
      });

    valueLabels.transition().duration(tweenDuration).attrTween("transform", textTween);

    valueLabels.exit().remove();


    //DRAW LABELS WITH ENTITY NAMES
    nameLabels = label_group.selectAll("text.units").data(filteredPieData)
      .attr("dy", function(d){
        if ((d.startAngle+d.endAngle)/2 > Math.PI/2 && (d.startAngle+d.endAngle)/2 < Math.PI*1.5 ) {
          return 17;
        } else {
          return 5;
        }
      })
      .attr("text-anchor", function(d){
        if ((d.startAngle+d.endAngle)/2 < Math.PI ) {
          return "beginning";
        } else {
          return "end";
        }
      }).text(function(d){
        return d.name;
      });

    nameLabels.enter().append("svg:text")
      .attr("class", "units")
      .attr("transform", function(d) {
        return "translate(" + Math.cos(((d.startAngle+d.endAngle - Math.PI)/2)) * (r+textOffset) + "," + Math.sin((d.startAngle+d.endAngle - Math.PI)/2) * (r+textOffset) + ")";
      })
      .attr("dy", function(d){
        if ((d.startAngle+d.endAngle)/2 > Math.PI/2 && (d.startAngle+d.endAngle)/2 < Math.PI*1.5 ) {
          return 17;
        } else {
          return 5;
        }
      })
      .attr("text-anchor", function(d){
        if ((d.startAngle+d.endAngle)/2 < Math.PI ) {
          return "beginning";
        } else {
          return "end";
        }
      }).text(function(d){
        return d.name;
      });

    nameLabels.transition().duration(tweenDuration).attrTween("transform", textTween);

    nameLabels.exit().remove();
  }  
}

///////////////////////////////////////////////////////////
// FUNCTIONS //////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Interpolate the arcs in data space.
function pieTween(d, i) {
  var s0;
  var e0;
  if(oldPieData[i]){
    s0 = oldPieData[i].startAngle;
    e0 = oldPieData[i].endAngle;
  } else if (!(oldPieData[i]) && oldPieData[i-1]) {
    s0 = oldPieData[i-1].endAngle;
    e0 = oldPieData[i-1].endAngle;
  } else if(!(oldPieData[i-1]) && oldPieData.length > 0){
    s0 = oldPieData[oldPieData.length-1].endAngle;
    e0 = oldPieData[oldPieData.length-1].endAngle;
  } else {
    s0 = 0;
    e0 = 0;
  }
  var i = d3.interpolate({startAngle: s0, endAngle: e0}, {startAngle: d.startAngle, endAngle: d.endAngle});
  return function(t) {
    var b = i(t);
    return arc(b);
  };
}

function removePieTween(d, i) {
  s0 = 2 * Math.PI;
  e0 = 2 * Math.PI;
  var i = d3.interpolate({startAngle: d.startAngle, endAngle: d.endAngle}, {startAngle: s0, endAngle: e0});
  return function(t) {
    var b = i(t);
    return arc(b);
  };
}

function textTween(d, i) {
  var a;
  if(oldPieData[i]){
    a = (oldPieData[i].startAngle + oldPieData[i].endAngle - Math.PI)/2;
  } else if (!(oldPieData[i]) && oldPieData[i-1]) {
    a = (oldPieData[i-1].startAngle + oldPieData[i-1].endAngle - Math.PI)/2;
  } else if(!(oldPieData[i-1]) && oldPieData.length > 0) {
    a = (oldPieData[oldPieData.length-1].startAngle + oldPieData[oldPieData.length-1].endAngle - Math.PI)/2;
  } else {
    a = 0;
  }
  var b = (d.startAngle + d.endAngle - Math.PI)/2;

  var fn = d3.interpolateNumber(a, b);
  return function(t) {
    var val = fn(t);
    return "translate(" + Math.cos(val) * (r+textOffset) + "," + Math.sin(val) * (r+textOffset) + ")";
  };
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function(){

  //update_donut(brownData);
    update_donut(brownData);
    populate_percentages("brown");

    //Display Brown's committees as default
    $("#donut-committee span").html(" "+info[0].committee);

  $(".donut-candidate").click(function(){

    $(".donut-candidate").removeClass("selected");
    $(this).addClass("selected");
      
    //Grab name of clicked candidate
    var candidate = $(this).attr("data-name");

    //Pass that candidate's data to update_donut function 
    update_donut(window[candidate + "Data"]);

    //Update percentages in legend
    populate_percentages(candidate);

    //Identify the index of the array using the name
    switch(candidate){
      case "brown": var index = 0; break;
      case "gansler": var index = 1; break;
      case "mizeur": var index = 2; break;
      case "craig": var index = 3; break;
      case "george": var index = 4; break;
      case "hogan": var index = 5; break;
      case "lollar": var index = 6; break;
    }


    $("#donut-committee span").html(" "+info[index].committee);
   // $("#explainer .name span").html(" "+info[index].committee);
   // $("#explainer .available span").html(" "+info[index].available);
   // $("#explainer .spent span").html(" "+info[index].spent);
   // $("#explainer .text p").html(info[index].text);
    //$("#explainer .link a .more span").html(info[index].candidate);
   // $("#explainer .link a").attr("href",info[index].link);
    //console.log(info[index].candidate);



  });


});




////CASH GRAPH////

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

d3.tsv("charts/data.tsv", type, function(error, data) {
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
      .on('mouseover', function(d){
            d3.select(this)
              .style("opacity", 1)
              .call(tip.show(d));
      })
      .on('mouseout', function(d){
            d3.select(this)
              .style("opacity", 0.5)
              .call(tip.hide);
      })
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

