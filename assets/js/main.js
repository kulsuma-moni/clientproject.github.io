
// (function($){
//     "use strict";

    
//     $(document).ready(function () {
//         // RESPONSIVE MAIN MENU JS
//         $('.menu').meanmenu();
//         //   END RESPONSIVE MAIN MENU JS

//         // START MENU JS CODE
//         $(window).on('scroll', function() {
//             if ($(this).scrollTop() > 100) {
//                 $('.main_menu').addClass('menu-shrink animated slideInDown');
//             } else {
//                 $('.main_menu').removeClass('menu-shrink animated slideInUp');
//             }
//         });
//         // home slider
//         $('.slider').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 3000,
//             arrows: false,
//             dots: false,
//             pauseOnHover: false,
//         });
//         $(".bannerSlider").slick({
//         dots: false, 
//         autoplay: true,
//         infinite: true, 
//         dots: false, 
//         slidesToShow: 1, 
//         slideswToScroll: 1, 
//         arrows: false
//         });

//         // START JS RANGE SLIDER JS
//         $(".js-range-slider").ionRangeSlider({
//             type: "double",
//             grid: true,
//             min: 25,
//             max: 250,
//             from: 100,
//             to: 200,
//             step: 25,
//             values: 25,
//         });
//         // END JS RANGE SLIDER JS
//     });
//     // data-background
//     $("[data-background]").each(function(){
//         $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
//     }); 


    

//     $(document).ready(function(){


// new WOW().init();

// // jQuery.
// $(function() {
// // Reference the tab links.
// const tabLinks = $('#tab-links li a');

// // Handle link clicks.
// tabLinks.click(function(event) {
// var $this = $(this);

// // Prevent default click behaviour.
// event.preventDefault();

// // Remove the active class from the active link and section.
// $('#tab-links a.active, section.active').removeClass('active');

// // Add the active class to the current link and corresponding section.
// $this.addClass('active');
// $($this.attr('href')).addClass('active');
// });

// });

// $( document ).ready(function() {
  
//     const changeText = function (el, text, color) {
//       el.text(text).css('color', color);
//     };
//     $('.input-2').keyup(function(){
//       let len = this.value.length;
//       const pbText = $('.form-2 .progress-bar_text');
  
//       if (len === 0) {
//         $('.form-2 .progress-bar_item').each(function() {
//           $(this).removeClass('active')
//         });
//         changeText(pbText, 'Password is blank');
//       } else if (len > 0 && len <= 4) {
//         $('.form-2 .progress-bar_item-1').addClass('active');
//         $('.form-2 .progress-bar_item-2').removeClass('active');
//         $('.form-2 .progress-bar_item-3').removeClass('active');
//         changeText(pbText, 'Too weak');
//       } else if (len > 4 && len <= 8) {
//         $('.form-2 .progress-bar_item-2').addClass('active');
//         $('.form-2 .progress-bar_item-3').removeClass('active');
//         changeText(pbText, 'Could be stronger');
//       } else {
//         $('.form-2 .progress-bar_item').each(function() {
//           $(this).addClass('active');
//         });
//         changeText(pbText, 'Strong password');
//       } 
//     });
//     $('#password + .glyphicon').on('click', function() {
//         $(this).toggleClass('glyphicon-eye-close').toggleClass('glyphicon-eye-open'); // toggle our classes for the eye icon
//         $('#password').togglePassword(); // activate the hideShowPassword plugin
//       });
//   });
// // TOP BUTTON JS CODE
// $('body').append('<div id="toTop" class="top-arrow"><i class="fas fa-angle-up"></i></div>');
// $(window).on('scroll', function () {
// if ($(this).scrollTop() != 0) {
// $('#toTop').fadeIn();
// } else {
// $('#toTop').fadeOut();
// }
// }); 
// $('#toTop').on('click', function(){
// $("html, body").animate({ scrollTop: 0 }, 600);
// return false;
// });
// // END TOP BUTTON JS CODE




//     });

//     $(document).ready(function(){


//       $('.popUpBtn').on('click', function(){
//         $('#'+$(this).data('modal')).css('display','block');
//       })
    
    
//       $('span.close').on('click', function(){
//         $('.modal').css('display','none');
//       })
    
    
//       $(window).on('click', function(event){
//         if (jQuery.inArray( event.target, $('.modal') ) != "-1") {
//               $('.modal').css('display','none');
//           }
//       })
//     });
//     // Get the modal
//     // var modal = document.getElementById('myModal');
    
//     // Get the button that opens the modal
//     // var btn = document.getElementById("myBtn");
    
//     // Get the <span> element that closes the modal
//     // var span = document.getElementsByClassName("close")[0];
    
//     // When the user clicks the button, open the modal 
//     // btn.onclick = function() {
//     //     modal.style.display = "block";
//     // }
    
//     // When the user clicks on <span> (x), close the modal
//     // span.onclick = function() {
//     //     modal.style.display = "none";
//     // }
    
//     // When the user clicks anywhere outside of the modal, close it
//     // window.onclick = function(event) {
//     //     if (event.target == modal) {
//     //         modal.style.display = "none";
//     //     }
//     // }
    
    
//     $(document).ready(function(){
    
    
//       $('.popUpBtn').on('click', function(){
//         $('#'+$(this).data('modal')).css('display','block');
//       })
    
    
//       $('span.close').on('click', function(){
//         $('.modal').css('display','none');
//       })
    
    
//       $(window).on('click', function(event){
//         if (jQuery.inArray( event.target, $('.modal') ) != "-1") {
//               $('.modal').css('display','none');
//           }
//       })
//     })


//     $('.box1').on('click', function() {
//       $('.box5').fadeToggle("slow");
//     });
    
//     $("#toggle").click(function() {
//         $(this).toggleClass("on");
//         $("#menu").slideToggle();
//     });

//     $(".but").click (function(){
//         // Close all open windows
//         $(".content").stop().slideUp(300); 
//         // Toggle this window open/close
//         $(this).next(".content").stop().slideToggle(300);
//         //hitter test// 
//         $(".hitter").show()
//       });
      
//       $(".hitter").click (function(){
//         // Close all open windows
//         $(".content").stop().slideUp(300); 
//       });

//     // // data-background
//     // $("[data-background]").each(function(){
//     // $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
//     // });
//     // // ADD & REMOVE ACTIVE CLASS FROM RESORT OVERVIEW
//     // $('.re_btn a').click(function(){
//     //     $('.re_btn a').removeClass("active");
//     //     $(this).addClass("active");
//     // });
//     // // RESORT OVERVIEW CONTENT JS


// })(jQuery);

// $(function(){
// 	$('.repeat').click(function(){
//     	var classes =  $(this).parent().attr('class');
//         $(this).parent().attr('class', 'animate');
//         var indicator = $(this);
//         setTimeout(function(){ 
//         	$(indicator).parent().addClass(classes);
//         }, 20);
//     });
// });
// $("#button").click(function() {  
//   $("#box form").toggle("slow");
//   return false;
// });

// $(document).ready(function(){
//   var current = 1;
	
// 	widget      = $(".step");
// 	btnnext     = $(".next");
// 	btnback     = $(".back"); 

// 	// Init buttons and UI
// 	widget.not(':eq(0)').hide();
// 	hideButtons(current);
// 	setProgress(current);

// 	// Next button click action
// 	btnnext.click(function(){
// 	    if(current < widget.length) { 			
//             widget.show(); 			
//             widget.not(':eq('+(current++)+')').hide();
//   	        setProgress(current); 
//             //alert("I was called from btnNext");
//         } 		
//        hideButtons(current); 	
//    });
   
//   // Back button click action 	
//   btnback.click(function(){ 		
//       if(current > 1){
// 		    current = current - 2;
// 		    btnnext.trigger('click');
// 	    }
//         hideButtons(current);
//     });		
// });

// // Change progress bar action
// setProgress = function(currstep){
// 	var percent = parseFloat(100 / widget.length) * currstep;
// 	percent = percent.toFixed();
// 	$(".progress-bar")
//         .css("width",percent+"%")
//         .html(percent+"%");	
// }

// // Hide buttons according to the current step
// hideButtons = function(current){
// 	var limit = parseInt(widget.length); 

// 	$(".action").hide();

// 	if(current < limit) btnnext.show(); 	
//   if(current > 1) btnback.show();
// 	if(current == limit) { btnnext.hide(); btnsubmit.show(); }
// }  

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   })
//   .add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

(function($){
    "use strict";

      // data-background
        $("[data-background]").each(function(){
            $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
        });
    // ADD & REMOVE ACTIVE CLASS FROM RESORT OVERVIEW
        $('.re_btn a').click(function(){
            $('.re_btn a').removeClass("active");
            $(this).addClass("active");
        });
        $('.bl_btn a').click(function(){
            $('.bl_btn a').removeClass("active");
            $(this).addClass("active");
        });
        $('.rec_btn .btn').click(function(){
            $('.rec_btn .btn').removeClass("active");
            $(this).addClass("active");
        });
        $('.pds_btn .btn').click(function(){
         $('.pds_btn .btn').removeClass("active");
         $(this).addClass("active");
     });
     $('.vc_btn .btn').click(function(){
      $('.vc_btn .btn').removeClass("active");
      $(this).addClass("active");
  });
        // RESORT OVERVIEW CONTENT JS
        // RE_BTN_1
        $('#animal_king').click(function(){
            $('#oldkeywest_content, #boardwalk_content, #boulderridge_content ,#saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#animal_kingdom_content').show();
        });
         // RE_BTN_2
        $('#old_key_west').click(function(){
            $('#animal_kingdom_content, #boardwalk_content ,#boulderridge_content ,#saratoga_springs_content, #beachclub_content, #baylaketower_content ,#hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#oldkeywest_content').show();
        });
         // RE_BTN_3
        $('#board_walk').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#boardwalk_content').show();
        });
     
         // RE_BTN_4
        $('#boulder_ridge').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#boulderridge_content').show();
        });
         // RE_BTN_5
        $('#saratoga_springs').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#saratoga_springs_content').show();
        });
         // RE_BTN_6
        $('#beach_club').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content ,#saratoga_springs_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#beachclub_content').show();
        });
         // RE_BTN_7
        $('#bay_lake_tower').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#baylaketower_content').show();
        });

        // RE_BTN_8
        $('#hilton_head').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#hiltonhead_content').show();
         });
         // RE_BTN_9
        $('#aul_ani').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #verobeach_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#aulani_content').show();
         });

         // RE_BTN_10
        $('#vero_beach').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #grandfloridan_content, #polynesian_content, #coppercreek_content').hide();
            $('#verobeach_content').show();
         });

        // RE_BTN_12
        $('#grand_floridan').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #polynesian_content, #coppercreek_content').hide();
            $('#grandfloridan_content').show();
         });

         // RE_BTN_13
        $('#polyn_esian').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content, #saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #coppercreek_content').hide();
            $('#polynesian_content').show();
         });
        // RE_BTN_14
        $('#copper_creek').click(function(){
            $('#animal_kingdom_content, #oldkeywest_content, #boardwalk_content, #boulderridge_content ,#saratoga_springs_content, #beachclub_content, #baylaketower_content, #hiltonhead_content, #aulani_content, #verobeach_content, #grandfloridan_content, #polynesian_content').hide();
            $('#coppercreek_content').show();
         });

         $('#colpas_ctn_1').click(function(){
          $('.waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_4, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
          $('.waitlist_sh_ctn_1').show();
       });
       $('#colpas_ctn_2').click(function(){
        $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_3, .waitlist_sh_ctn_4, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
        $('.waitlist_sh_ctn_2').show();
     });
     $('#colpas_ctn_3').click(function(){
      $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_4, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
      $('.waitlist_sh_ctn_3').show();
   });
   $('#colpas_ctn_4').click(function(){
    $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
    $('.waitlist_sh_ctn_4').show();
 });

 $('#colpas_ctn_5').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_4, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_5').show();
});
$('#colpas_ctn_6').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_4, .waitlist_sh_ctn_5, .waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_6').show();
});

$('#colpas_ctn_7').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_4, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_7').show();
});

$('#colpas_ctn_8').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_4, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_8').show();
});
$('#colpas_ctn_9').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_4, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_9').show();
});
$('#colpas_ctn_10').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_4, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_10').show();
});
$('#colpas_ctn_11').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_4,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_11').show();
});
$('#colpas_ctn_12').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_4,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_12').show();
});
$('#colpas_ctn_13').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_4, .waitlist_sh_ctn_14, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_13').show();
});
$('#colpas_ctn_14').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_4, .waitlist_sh_ctn_15').hide();
  $('.waitlist_sh_ctn_14').show();
});

$('#colpas_ctn_15').click(function(){
  $('.waitlist_sh_ctn_1, .waitlist_sh_ctn_2, .waitlist_sh_ctn_3, .waitlist_sh_ctn_5, .waitlist_sh_ctn_6,.waitlist_sh_ctn_7, .waitlist_sh_ctn_8, .waitlist_sh_ctn_9, .waitlist_sh_ctn_10, .waitlist_sh_ctn_11,  .waitlist_sh_ctn_12,  .waitlist_sh_ctn_13, .waitlist_sh_ctn_14, .waitlist_sh_ctn_4').hide();
  $('.waitlist_sh_ctn_15').show();
});


        //  HIDE & SHOW TABLE COLUM
        $('.checked_1').click(function() {
            $('th:nth-child(2)').toggle();                
         });
        $('.checked_1').click(function() {
            $('td:nth-child(2)').toggle();                
         });
         $('.checked_2').click(function() {
            $('th:nth-child(3)').toggle();                
         });
        $('.checked_2').click(function() {
            $('td:nth-child(3)').toggle();                
         });
         $('.checked_3').click(function() {
            $('th:nth-child(4)').toggle();                
         });
        $('.checked_3').click(function() {
            $('td:nth-child(4)').toggle();                
         });
         $('.checked_4').click(function() {
            $('th:nth-child(5)').toggle();                
         });
        $('.checked_4').click(function() {
            $('td:nth-child(5)').toggle();                
         });
         $('.checked_5').click(function() {
            $('th:nth-child(6)').toggle();                
         });
        $('.checked_5').click(function() {
            $('td:nth-child(6)').toggle();                
         });
         $('.checked_6').click(function() {
            $('th:nth-child(7)').toggle();                
         });
        $('.checked_6').click(function() {
            $('td:nth-child(7)').toggle();                
         });
         $('.checked_7').click(function() {
            $('th:nth-child(8)').toggle();                
         });
        $('.checked_7').click(function() {
            $('td:nth-child(8)').toggle();                
         });
         $('.checked_8').click(function() {
            $('th:nth-child(9)').toggle();                
         });
        $('.checked_8').click(function() {
            $('td:nth-child(9)').toggle();                
         });

         $('.checked_9').click(function() {
            $('th:nth-child(2)').toggle();                
         });
        $('.checked_9').click(function() {
            $('td:nth-child(2)').toggle();                
         });
         $('.checked_10').click(function() {
            $('th:nth-child(3)').toggle();                
         });
        $('.checked_10').click(function() {
            $('td:nth-child(3)').toggle();                
         });
         $('.checked_11').click(function() {
            $('th:nth-child(4)').toggle();                
         });
        $('.checked_11').click(function() {
            $('td:nth-child(4)').toggle();                
         });
         $('.checked_12').click(function() {
            $('th:nth-child(5)').toggle();                
         });
        $('.checked_12').click(function() {
            $('td:nth-child(5)').toggle();                
         });
         $('.checked_13').click(function() {
            $('th:nth-child(6)').toggle();                
         });
        $('.checked_13').click(function() {
            $('td:nth-child(6)').toggle();                
         });
         $('.checked_14').click(function() {
            $('th:nth-child(7)').toggle();                
         });
        $('.checked_14').click(function() {
            $('td:nth-child(7)').toggle();                
         });
         $('.checked_15').click(function() {
            $('th:nth-child(8)').toggle();                
         });
        $('.checked_15').click(function() {
            $('td:nth-child(8)').toggle();                
         });

      // active menu

// 	$('#faq_buying').onePageNav({
// 		currentClass: 'active',
// 		changeHash: false,
// 		scrollSpeed: 750,
// 		scrollThreshold: 0.5,
// 		filter: '',
// 		easing: 'swing'
//   });
  
          // riviera page slider
        $('.slider_2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
        });
        $(".bannerSlider_2").slick({
        dots: false, 
        autoplay: true,
        infinite: true, 
        dots: false, 
        slidesToShow: 1, 
        slideswToScroll: 1, 
        arrows: false
        });

  $(".requ_ranger_slider_1").ionRangeSlider({
    type: "double",
    grid: true,
    min: 25,
    max: 250,
    from: 100,
    to: 200,
    step: 25,
    values: 25,
});
$(".requ_ranger_slider_2").ionRangeSlider({
  type: "double",
  grid: true,
  min: 25,
  max: 250,
  from: 100,
  to: 200,
  step: 25,
  values: 25,
});

$('.retail_btn').popover({
  placement : 'bottom',
  trigger : 'hover',
  html : true,
  content : '<div><a href="#"><img src="assets/image/retail_prices.png" alt="retail price"></a></div>'

});
$('.main_side_tab .nav a').click(function(){
  $('.learning_center').hide();
  // $('.tab-content').show();
});

$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows:true,
     // prev arrow
  prevArrow: '<button type="button" data-role="none" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',

// next arrow
nextArrow: '<button type="button" data-role="none" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   arrows:false,
   focusOnSelect: true
 });
})(jQuery);

