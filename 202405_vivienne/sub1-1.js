$(document).ready(function(){
  $(".slide-img").on("touchstart", function(event){
      let xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function(event){
          let xMove = event.originalEvent.touches[0].pageX;
          if( Math.floor(xClick - xMove) > 5 ){
              $(this).carousel('next');
          }
          else if( Math.floor(xClick - xMove) < -5 ){
              $(this).carousel('prev');
          }
      });
      $(".slide-img").on("touchend", function(){
          $(this).off("touchmove");
      });
  });
});