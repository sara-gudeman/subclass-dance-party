$(document).ready(function(){
  $(".pretty-lights").toggle(false);
  $(".addPartyButton").on("click", function(event){
    $(".pretty-lights").toggle();
  });
});