// $('section:not(:first)').addClass('hidden');
// $('.container').on('click', 'h2', function(){
//     $(this).parent().removeClass('hidden').siblings().addClass('hidden');
   
    // add a class that has a larger height to box 1
    //add a class to box 2 & 3 that has a height of 27 px
    
  // });

  $('.box1').on('click', 'h2', function(event){
    var btn = $(event.target);
    btn.addClass('box2');
    btn.removeClass('box2');
  });

  $('.box2').on('click', 'h2', function(event){
    var btn = $(event.target);
    btn.addClass('box3');
    btn.removeClass('box3');
  });

  $('.box3').on('click', 'h2', function(event){
    var btn = $(event.target);
    btn.addClass('box1');
    btn.removeClass('box1');
  });
