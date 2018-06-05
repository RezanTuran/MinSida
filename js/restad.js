
$(document).ready(function(){
    $('.menu').on('click', function(){
        $('.meny-list').toggle(1000);
    });
    });

    /*Visa Lunch Meny*/
    $(document).ready(function(){
        $(".button-meny").click(function(){
            $("#lunch-meny").toggle(1000);
        });
    });
    
    /*Gömma buton  (visa lunch memny)*/
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

/*Hela meny*/

$(document).ready(function(){
    $(".button-hela-menyn").click(function(){
        $("#hela-meny-sida").slideDown("slow");
    });
});


/*Visa hela meny */

$(document).ready(function(){
    $(".box-button-meny").click(function(){
        $("#hela-meny-sida").toggle(1000);
    });
});

/*Länka*/
$(document).ready(function(){
    $(".meny-link").click(function(){
        $("#hela-meny-sida").slideDown("slow");
    });
});

