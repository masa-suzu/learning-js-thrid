$(document).ready(function () {
  "use strict";

  console.log("jQuery has been loaded.");
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  let c = Shape.Circle(200, 200, 50);
  c.fillColor = "green";

  let tool = new Tool();
  tool.onMouseDown = function (event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = "black";
  };

  paper.view.draw();

  console.log("main.js is loaded here.");
});
