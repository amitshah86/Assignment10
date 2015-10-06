(function() {

  $('.box1').on('click', 'h2', function(event){
    var btn = $(event.target);
    // add a class that has a larger height to box 1
    //add a class to box 2 & 3 that has a height of 27 px
    
  });

  $('.box2').on('click', 'h2', function(event){
    var btn = $(event.target);
    btn.addClass('box2');
  });

  $('.box3').on('click', 'h2', function(event){
    var btn = $(event.target);
    btn.addClass('box3');
  });





}());