var ShimmyDancer = function(top, left, timeBetweenSteps) {
  GifDancer.call(this, top, left, timeBetweenSteps);
  this.moveToggle = 0;
};
ShimmyDancer.prototype = Object.create(GifDancer.prototype);
ShimmyDancer.prototype.constructor = ShimmyDancer;

ShimmyDancer.prototype.step = function(){
  GifDancer.prototype.step.call(this);
  if(this.moveToggle === 0){
    this.setPosition(this.top, this.left + 20);
    this.moveToggle++;
  } else if (this.moveToggle === 1){
    this.setPosition(this.top, this.left - 20);
    this.moveToggle++;
  } else if (this.moveToggle === 2){
    this.setPosition(this.top + 20, this.left);
    this.moveToggle++;
  } else if (this.moveToggle === 3){
    this.setPosition(this.top - 20, this.left);
    this.moveToggle = 0;
  }
}