/*HAMBURGER MENU*/  
var hamburger = document.querySelector(".hamburger-icon");
 hamburger.addEventListener('click', function() {
     document.querySelector(".page-header").classList.toggle("nav-open");
 });
/*HAMBURGER MENU*/

/*SLICK SLIDER*/
$('.slick-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true
            }
 },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
 },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
 }
 ]
});
/*SLICK SLIDER*/