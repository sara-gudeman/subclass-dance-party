var BananaDancer = function(top, left, timeBetweenSteps){
  var $danceDiv = $('<div class="gifDancer gif">' +
                    '<img src="gifs/bananadance/banana0.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana1.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana2.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana3.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana4.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana5.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana6.gif" height="200" width="200">' +
                    '<img src="gifs/bananadance/banana7.gif" height="200" width="200"></div>');
  GifDancer.call(this, top, left, 70, $danceDiv);
}
BananaDancer.prototype = Object.create(GifDancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;