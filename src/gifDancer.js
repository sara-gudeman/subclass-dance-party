var GifDancer = function(top, left, timeBetweenSteps) {
  var $danceDiv = $('<div class="gifDancer">' +
                    '<img class="first" src="gifs/burgerdance/burger0.png" height="200" width="200">' +
                    '<img class="second" src="gifs/burgerdance/burger1.png" height="200" width="200">' +
                    '<img class="third" src="gifs/burgerdance/burger2.png" height="200" width="200"></div>');
  Dancer.call(this, top, left, timeBetweenSteps, $danceDiv);
  
  // hide all of the images initially
  this.$node.find('img').hide();

  this.numSteps = this.$node.find('img').length;
  this.currentStep = 0;
  this.lastStep = this.numSteps - 1;
};

GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = BlinkyDancer;
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