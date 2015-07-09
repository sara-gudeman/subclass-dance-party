var GifDancer = function(top, left, timeBetweenSteps) {
  var $danceDiv = $('<div class="gifDancer">' +
                    '<img class="first" src="gifs/burgerdance/burger0.gif">' +
                    '<img class="second" src="gifs/burgerdance/burger1.gif"></div>');
  Dancer.call(this, top, left, timeBetweenSteps, $danceDiv);
  this.state = 0;
};

GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = BlinkyDancer;
GifDancer.prototype.step = function() {
  // console.log(this);
  Dancer.prototype.step.call(this);
  if (this.state === 0) {
    this.$node.find('.second').hide();
    this.$node.find('.first').show();
    this.state = 1;
  } else {
    this.$node.find('.first').hide();
    this.$node.find('.second').show();
    this.state = 0;
  }
  // this.$node.toggle();
};