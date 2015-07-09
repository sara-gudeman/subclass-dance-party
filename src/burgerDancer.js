var BurgerDancer = function(top, left, timeBetweenSteps){
  var $danceDiv = $('<div class="gifDancer gif">' +
                    '<img class="first" src="gifs/burgerdance/burger0.png" height="200" width="200">' +
                    '<img class="second" src="gifs/burgerdance/burger1.png" height="200" width="200">' +
                    '<img class="third" src="gifs/burgerdance/burger2.png" height="200" width="200"></div>');
  GifDancer.call(this, top, left, timeBetweenSteps, $danceDiv);
}
BurgerDancer.prototype = Object.create(GifDancer.prototype);
BurgerDancer.prototype.constructor = BurgerDancer;