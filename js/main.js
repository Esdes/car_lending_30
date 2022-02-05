$(document).ready(function(){
  $('.carousel__inner').slick({
    arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesPerRow: 1,
	slidesToShow: 3,
	centerMode: true,
	centerPadding: '0px',
	responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});
	