var code_area_html =
"<!DOCTYPE html>\n" +
"<head>\n" +
"\t<title>D3js</title>\n" +
"<style>.axis path {fill: none;stroke: grey;shape-rendering: crispEdges;}\n" +
".axis text {}\n" +
".tick line {stroke: grey;shape-rendering: crispEdges;}</style>\n"+
"</head>\n" +
"<body>\n" +
"\t<div></div>\n" +
"\t<script src='http://d3js.org/d3.v3.min.js'><\/script>\n" +
"</body>\n" +
"</html>";

var code_area_js_graph =
"var chart_area =\n" +
  "\td3\n" +
  "\t.select('body') \n" +
  "\t.append('div')    \n" +
  "\t.classed('chart_area', true); \n" +
  "\n" +
"var data = []; for (var i=0; i<10; i++){data.push(i);}\n" +
"var CHART_WIDTH = 400, CHART_HEIGHT = 300;\n"+
"\n" +
"var widthScale = d3.scale.linear()\n" +
  "\t.domain([d3.min(data, function(d, i) {return d;}),\n" +
  "d3.max(data, function(d, i) {return d;})])\n" +
  "\t.range([0, CHART_WIDTH])\n" +
  "\t.nice();\n"+
"\n" +
"var hAxis_area =\n" +
  "d3\n" +
  "\t.select('body')\n" +
  "\t.append('div')\n" +
  "\t.style('position', 'absolute');\n" +
  "\n" +
"var ticks = widthScale.ticks(10);\n" +
"hAxis_area\n" +
"\t.selectAll('span')\n" +
"\t.data(ticks)\n" +
"\t.enter()\n" +
"\t.append('span')\n" +
"\t.style('position', 'absolute')\n" +
"\t.style('left', function(d,i) { return widthScale(d) + 'px'; } )\n" +
"\t.text(String);\n" +
"\n" +
"chart_area\n" +
"\t.selectAll('div')\n" +
"\t.data(data)\n" +
"\t.enter().append('div').classed('bar_area', true)\n" +
"\t.style('background-color',function(d, i) { return 'hsl(250,100%,'+(100-d/0.5)+'%)'; })\n"+
"\t.style('height', '20px')\n"+
"\t.style('margin', '2px 0px')\n"+
"\t.style('width', function(d,i) { return widthScale(d) + 'px'; } )\n" +
"\t.text(function(d) { return d; });";

var editor = ace.edit("editor");
editor.setTheme("ace/theme/Dreamweaver");
editor.getSession().setMode("ace/mode/javascript");
editor.setValue(code_area_js_graph);


var iframe = document.getElementById("frame_now");
var doc = iframe.contentDocument || iframe.contentWindow.document;

doc.open();
doc.write(code_area_html+ "<script>" + editor.getValue() + "<\/script>");
doc.close();

editor.getSession().on("change", function() {
    doc.open();
    doc.write(code_area_html+ '<script>' + editor.getValue() + "<\/script>");
    doc.close();
});
