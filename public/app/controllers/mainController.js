app.controller('mainController', function ($scope, $interval, $timeout) {
  var images = {};
  var running = false;
  var totalResources = 4;
  var numResourcesLoaded = 0;
  var fps = 30;
  var lastDownTarget, canvas;
  window.onload = function () {
    canvas = document.getElementById('canvasId');

    

    document.addEventListener('keydown', function (event) {
      if (event.keyCode == 38) {
        if (!running) {
          running = true;
          $timeout(function () {

            running = false;
          }, 500);
        };
      }
    }, false);
  };
  $scope.run = function (e) {
    console.log(1);
    // if (!running) {
    //   running = true;
    //   $timeout(land, 500);
    // };

  };

  // var land = function () {

  //   running = false;
  // };


  $scope.loadImage = function (name) {

    images[name] = new Image();
    images[name].onload = function () {
      $scope.resourceLoaded();
    }
    images[name].src = "../app/views/images/" + name + ".png";
  };

  $scope.loadImage("spongebob1");
  $scope.loadImage("leftLeg1");
  $scope.loadImage("rightLeg");
  $scope.loadImage("leftLeg2");


  $scope.resourceLoaded = function () {

    numResourcesLoaded += 1;
    var context1 = document.getElementById('canvasId');
    var context = context1.getContext("2d");
    if (numResourcesLoaded === totalResources) {
      var charX = 245;
      var charY = 185;
      var jumpHeight = 30;
      var redraw = function () {
        var x = charX;
        var y = charY;
        canvasId.width = canvasId.width;
        if (running) {
          y -= jumpHeight;
        }
        context.drawImage(images["spongebob1"], x, y, x + 40, y - 42);
        if (running) {

          context.drawImage(images["leftLeg2"], x, y, x + 40, y - 42);

          context.drawImage(images["rightLeg"], x, y, x + 40, y - 42);
        } else {

          context.drawImage(images["leftLeg1"], x, y, x + 40, y - 42);

          context.drawImage(images["rightLeg"], x, y, x + 40, y - 42);
        }
      };
      $interval(redraw, 1000 / fps);
    }
  }

});