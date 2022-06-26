const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
}

const menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  menuList.classList.remove("active");
}
$('.sliderGuitar').on('init reInit',function(e,slick){
  if(slick.slideCount<=slick.options.slidesToShow){
    slick.slickAdd(slick.$slides.clone())
  }
})

$('.sliderPartner').on('init reInit',function(e,slick){
  if(slick.slideCount<=slick.options.slidesToShow){
    slick.slickAdd(slick.$slides.clone())
  }
})

$(document).ready(function () {
  $('.sliderHeader').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.sliderGuitar').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:true,
    nextArrow:'<div class="next"></div>',
    prevArrow:'<div class="prev"></div>',
    autoplay:true,
    speed:1000,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,

	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
          arrows:false,
	      }
	    }
    ]
  });

  $('.sliderPartner').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows:true,
    nextArrow:'<div class="next part"></div>',
    prevArrow:'<div class="prev part"></div>',
    autoplay:true,
    speed:1000,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 5,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
          arrows:false,
	      }
	    }
    ]
  });
});
