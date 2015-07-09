var FlyingTomato = function(top, left, timeBetweenSteps) {

  TomatoDancer.call(this, top, left, 3000);

};

FlyingTomato.prototype = Object.create(TomatoDancer.prototype);
FlyingTomato.prototype.constructor = FlyingTomato;
FlyingTomato.prototype.step = function(){
  TomatoDancer.prototype.step.call(this);
  topVal = $("body").height() * Math.random();
  leftVal = $("body").width() * Math.random();

  this.$node.animate({top: topVal, left: leftVal}, 700);

}
