
$(function(){
          
   $('.header .info').each(function(){
    $(this).css('paddingTop' , ($(window).height() - $('.info').height() + 80) / 2)
   });
  
  (function autoSlider () {

  $('.tetimonials .active').each(function(){

     if(!$(this).is(':last-child')){

         $(this).delay(3000).fadeOut(200 , function(){

           $(this).removeClass('active').next('.item').addClass('active').fadeIn(200);

           autoSlider ();

         });

     }else{

         $(this).delay(3000).fadeOut(200 , function(){

           $(this).removeClass('active');
           $('.item').eq(0).addClass('active').fadeIn(200);

           autoSlider ();

         });

     }

  });

 }());

  // tap to go up

  $(window).scroll(function(){

    if($(window).scrollTop() > 700){

      $('.goup').fadeIn(500)

    }else{

      $('.goup').fadeOut(500)

    }

  })

  $('.goup').click(function(e){

    e.preventDefault();
  
    $('html , body').animate({
 
       scrollTop : 0

    }, 1000)

  })

  $('.loading .loading-container').fadeOut(3000 , function(){

    $(this).parent().fadeOut(3000 , function(){

       $('body').css('overflow' ,'auto');

       $(this).remove();

    });

  });

});


