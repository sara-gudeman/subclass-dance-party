$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var topVal = 0;
    var leftVal = 0;
    var stepInterval = Math.random() * 1000;
    // make a dancer with a random position
    if (dancers.length === 0) {
      topVal = $("body").height() /2;
      leftVal = $("body").width() /2;
    } else {
      topVal = dancers[0].top;
      leftVal = dancers[0].left;
    }

    var dancer = new dancerMakerFunction(topVal, leftVal, stepInterval);
    //console.log("Appending " + dancer.$node)
    $('body').append(dancer.$node);
    dancers.push(dancer);

    topVal = $("body").height() * Math.random();
    leftVal = $("body").width() * Math.random();

    dancer.$node.animate( { top: topVal, left: leftVal }, 2000);
    dancer.left = leftVal;
    dancer.top = topVal;
  });
  
  $(".lineUpButton").on("click", function(event) {
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].lineUp();
    }
  });
});

