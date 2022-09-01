(function($){
    jQuery(document).ready(function () {
        jQuery('.toggle-label').click(function () {
            jQuery('.offcanvas-container').toggleClass('active');

        });
    });

    //owl carowsel
    var owl = $(".single_group_team2");
    owl.owlCarousel({
        margin: 10,
        loop: true,
        autoplay:true,
        autoplayTimeout: 7000,
         smartSpeed: 800,
        nav: false,
        dots:false,
        responsive: {
            0: {
              items: 1
            },

            600: {
              items: 3
            },
        
            1024: {
              items: 4
            },
        
            1366: {
              items: 5
            }
          }
    });
    //cocoma car
    var owl = $(".all_cocoma");
    owl.owlCarousel({
        margin: 20,
        loop: true,
        autoplay:true,
        autoplayTimeout: 7000,
         smartSpeed: 800,
        nav: false,
        dots:false,
        responsive: {
            0: {
              items: 1
            },

            600: {
              items: 2
            },
        
            1024: {
              items: 3
            }
          }
    });
    
 }(jQuery));