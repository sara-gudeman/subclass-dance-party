var SquishedDancer = function(top, left, timeBetweenSteps) {
  var $node = $('<div class="squished"></div>');
  Dancer.apply(this, top, left, timeBetweenSteps, $node);
};

SquishedDancer.prototype = Object.create(Dancer);
SquishedDancer.prototype.constructor = SquishedDancer;