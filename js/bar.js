// var svg = dimple.newSvg("#chartContainer", 590, 400);
d3.csv("csv/belgie.csv", function (data) {
  //barchart
  console.log(data[0]);
  var svg3 = dimple.newSvg("#chartContainer2", 690, 400);
  var myChart2 = new dimple.chart(svg3, data);
  myChart2.setBounds(200, 30, 480, 330);
  myChart2.addMeasureAxis("x", "Total points (whole season)");
  var y = myChart2.addCategoryAxis("y", "Team name");
  //y.addOrderRule("Date");
  myChart2.addSeries(null, dimple.plot.bar);
  myChart2.draw();
});

/*d3.csv("csv/belgie_thuis.csv", function (data) {
    //barchart
    console.log(data[0]);
    var svg4 = dimple.newSvg("#chartContainer3", 690, 400);
    var myChart3 = new dimple.chart(svg4, data);
    myChart3.setBounds(200, 30, 480, 330);
    myChart3.addMeasureAxis("x", "Home game points");
    var y = myChart3.addCategoryAxis("y", "Team name");
    //y.addOrderRule("Date");
    myChart3.addSeries(null, dimple.plot.bar);
    myChart3.draw();
  });*/