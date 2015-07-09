var TomatoDancer = function(top, left, timeBetweenSteps) {

var $danceDiv = $('<div class="gif tomato">' +
                '<img class="first" src="gifs/tomato/tomato.png" height="200" width="200">' +
                '<img class="second" src="gifs/tomato/tomatoSquashed.png" height="200" width="200"></div>');
  Dancer.call(this, top, left, timeBetweenSteps, $danceDiv);
  
  // hide all of the images initially
  this.$node.find('img').hide();
  this.$node.find('.first').show();

  // this.numSteps = this.$node.find('img').length;
  // this.currentStep = 0;
  // this.lastStep = this.numSteps - 1;
};

TomatoDancer.prototype = Object.create(Dancer.prototype);
TomatoDancer.prototype.constructor = TomatoDancer;