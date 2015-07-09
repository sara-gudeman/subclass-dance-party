var Dancer = function(top, left, timeBetweenSteps, node){
  if (node === undefined) {
    node = $('<span class="dancer">PARTY TIME!</span>');
  }
  this.$node = node;
  this.top = top;
  this.left = left;

  this.linedUp = false;
  this.previousTopPosition = top;

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

Dancer.prototype.lineUp = function() {
 
 console.log(this.linedUp);
 if(!this.linedUp){
  this.previousTopPosition = this.top;
  this.top = $('body').height() / 2;
  this.linedUp = true;

 } else {
  this.top = this.previousTopPosition;
  this.linedUp = false;
 }

 this.$node.animate({top: this.top, left:this.left}, 2000);

 var styleSettings = {
  top: this.top,
  left: this.left
}

  this.$node.css(styleSettings);
};