var padding = 55,
  width = 960,
  height = 500,
  rightBar = width / 8,
  legendheight = height / 4;


var svg2 = d3.select("#chartContainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append('g')
  .attr('class', 'chart');


// var svg = dimple.newSvg("#chartContainer", 590, 400);
d3.csv("csv/belgie.csv", function (data) {
  //barchart
  console.log(data);
  var svg3 = dimple.newSvg("#chartContainer2", 690, 400);
  var myChart2 = new dimple.chart(svg3, data);
  myChart2.setBounds(200, 30, 480, 330);
  myChart2.addMeasureAxis("x", "win_lose");
  var y = myChart2.addCategoryAxis("y", "team_long_name0");
  //y.addOrderRule("Date");
  myChart2.addSeries(null, dimple.plot.bar);
  myChart2.draw();
});
