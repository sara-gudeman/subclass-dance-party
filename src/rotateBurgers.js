$(document).ready(function(){
	var rotation = 0
  $('body').on('click','.gifDancer', function(event){
    context = this;
    var spins = 0
    var spin = function(context){
      if(spins < 50){
        rotation += 7.2;
        $(context).rotate(rotation);
        spins++;
        setTimeout(function(){spin(context);}, 50);
      } 
    }
    spin(context);
	});
  $.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
  };
});