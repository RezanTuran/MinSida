$(document).ready(function(){
    $('.menu').on('click', function(){
        $('nav ul').toggleClass('visa');
    });
    })

    /*Visa Lunch Meny*/
    $(document).ready(function(){
        $(".button-meny").click(function(){
            $("#lunch-meny").toggle(1000);
        });
    });
    
    /*Gömma buton*/
    $(document).ready(function(){
        $(".button-meny").click(function(){
            $(this).hide();
        });
    });

    /* Bildspel*/
setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);

/*Visa hela meny */

$(document).ready(function(){
    $(".box-button-meny").click(function(){
        $("#hela-meny-sida").toggle(1000);
    });
});



