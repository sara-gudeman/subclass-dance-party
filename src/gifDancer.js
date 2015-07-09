var GifDancer = function(top, left, timeBetweenSteps, $danceDiv) {
  
  Dancer.call(this, top, left, timeBetweenSteps, $danceDiv);
  
  // hide all of the images initially
  this.$node.find('img').hide();

  this.numSteps = this.$node.find('img').length;
  this.currentStep = 0;
  this.lastStep = this.numSteps - 1;
};

GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = GifDancer;
GifDancer.prototype.step = function() {
  // console.log(this);
  Dancer.prototype.step.call(this);
  $images = $(this.$node.find('img'));
  
  if(this.currentStep+1 === this.numSteps){
    this.currentStep = 0;
    this.lastStep = this.numSteps - 1;
  } else{
    this.lastStep = this.currentStep;
    this.currentStep++;
  }
  $($images[this.lastStep]).hide();
  $($images[[this.currentStep]]).show();
};