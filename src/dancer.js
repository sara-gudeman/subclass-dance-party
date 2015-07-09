var Dancer = function(top, left, timeBetweenSteps, node){
  if (node === undefined) {
    node = $('<span class="dancer"></span>');
  }
  this.$node = node;
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

Dancer.prototype.step = function() {
  var context = this;
  setTimeout(function(){context.step();}, context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}