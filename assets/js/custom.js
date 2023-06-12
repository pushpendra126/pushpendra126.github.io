$('.products').slick({
 	slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: true,
  	arrows: false,
  	autoplay: true,
  	autoplaySpeed: 2000,
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


$('.gallery').slick({
 	slidesToShow: 4,
  	slidesToScroll: 1,
  	dots: true,
  	arrows: false,
  	autoplay: true,
  	autoplaySpeed: 2000,
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});



$('.blog').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


$('.certifications').slick({
  slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


/*** ***/
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#ui-to-top').addClass('active');
    } else {
       $('#ui-to-top').removeClass('active');
    }
});
$('#ui-to-top').on('click', function () {
    $('body,html').animate({
          scrollTop: 0
    }, 800);
    return false;
});



$('#videoLink')
    .magnificPopup({
    type:'inline',
    midClick: true 
})
$('#videoLink1')
    .magnificPopup({
    type:'inline',
    midClick: true 
})