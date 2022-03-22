$(document).ready(function(){

    // Requires jQuery
    
    $(document).on('click','.js-menu_toggle.closed',function(e){
        e.preventDefault(); $('.list_load, .list_item').stop();
        $(this).removeClass('closed').addClass('opened');
    
        $('.side_menu').css({ 'left':'0px' });
    
        var count = $('.list_item').length;
        $('.list_load').slideDown( (count*.6)*100 );
        $('.list_item').each(function(i){
            var thisLI = $(this);
            timeOut = 100*i;
            setTimeout(function(){
                thisLI.css({
                    'opacity':'1',
                    'margin-left':'0'
                });
            },100*i);
        });
    });
    
    $(document).on('click','.js-menu_toggle.opened',function(e){
        e.preventDefault(); $('.list_load, .list_item').stop();
        $(this).removeClass('opened').addClass('closed');
    
        $('.side_menu').css({ 'left':'-250px' });
    
        var count = $('.list_item').length;
        $('.list_item').css({
            'opacity':'0',
            'margin-left':'-20px'
        });
        $('.list_load').slideUp(300);
    });    


    $(window).scroll(function(){
      
         var sticky = $('header');
         var sticky_block_trending = $('.top-section-block');
         var sticky_block_vdo = $('.top-section-vdo');
         var sticky_block_shopping = $('.top-section-shopping');
         var scroll = $(window).scrollTop();

         /*--------sticky header ----*/
         if (scroll >= 127)  {           
             sticky.addClass('header-sticky');                 
         }            
         else {            
            sticky.removeClass('header-sticky');           
         } 
         /*--------article block ----*/
         if (scroll >= 400)  {  
            sticky_block_trending.addClass('top-section-block-header');
        }    
         else {            
            sticky_block_trending.removeClass('top-section-block-header');
         } 
         /*--------vdo block ----*/
         if (scroll >= 900)  {  
            sticky_block_vdo.addClass('top-section-vdo-header');
        }    
        else {            
            sticky_block_vdo.removeClass('top-section-vdo-header');
        } 
        /*--------shopping block ----*/
        if (scroll >= 1600)  {          
            sticky_block_shopping.addClass('top-section-shopping-header');
        }           
        else {   
            sticky_block_shopping.removeClass('top-section-shopping-header');
        }  
      });
       
      $(".item.dropdown").click(function(){
        $("this").toggleClass("selected");
        var id=$(this).data('id');
        $(".listing").hide();
        $(".box-filters-content").toggleClass("active");
        $(".box-filters-content .list-"+id+"").show();
      });

    //   $('.top-slider').owlCarousel({
    //       nav:true,
    //       items:1,
    //       dots:false,
    //       loop:true,
    //       autoplay: true,
    //       autoplayTimeout: 3000,
    //       autoplayHoverPause: true,
    //       smartSpeed: 1500,
    //       responsive:{
    //           0:{
    //               items:1,
    //               stagePadding: 0,
    //           },
    //           575:{
    //               items:1,
    //               stagePadding: 0,
    //           },
    //           768:{
    //               items:1,
    //           },
    //           1000:{
    //               items:1,
    //           }
    //       },

    //   });

    //   $('.hover-section-owl').owlCarousel({
    //     nav:false,
    //     items:4,
    //     margin:30,
    //     dots:false,
    //     //center:true,
    //     loop:true,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,
    //     smartSpeed: 1500,
    //     responsive:{
    //         0:{
    //             items:1,
    //             stagePadding: 50,
    //         },
    //         575:{
    //             items:2,
    //             stagePadding: 50,
    //         },
    //         768:{
    //             items:3,
    //         },
    //         1000:{
    //             items:4,
    //         }
    //     },
    // });
    $('.owlSlider-home').owlCarousel({
        smartSpeed: 400,
        items: 1,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,      
        onTranslated: animateSlide,
        onTranslate: removeAnimation,
        onInitialized: counter,
        onTranslated: counter,
        responsive:{
                   0:{
                      items:1,
                        
                    },
                    575:{
                       items:1,
                       
                    },
                    768:{
                         items:1,
                     },
                     1000:{
                       items:1,
                     }
                },
      });
        function counter(event) {

        var element = event.target;
        var items = event.item.count;
        var item = event.item.index + 1;
        var sldtxt = $('.active .ivySlideTxt').html();
        var sldWidth = 100;
        var sldPercent = sldWidth * item / items;
        $('#counter').html("<span>0"+item+"</span>/"+"0"+items);
        $('.slTxt').html(sldtxt);
        $('.slideState span').css("width", sldPercent + "%");
        $('.slideState span').html(sldPercent + "%")
        }  
        function removeAnimation() {
            var item = $(".owl-item .layer");
            item.removeClass(item.children().data('animate'));
        }
    
        function animateSlide() {
            var item = $(".owl-item.active .layer");
            item.addClass(item.children().data('animate'));
        }  
            
    });
 
    
  
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $("header .nav-wraper").addClass("affixScroll");
    }
    else
    {
        $("header .nav-wraper").removeClass("affixScroll");
    }
});

  
  
