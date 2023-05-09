
const video = document.getElementById("background-video");
const container = document.getElementById("scroll-listener");
const button = document.getElementById("back-to-top-button");
let scrollTop;


const scrollFunction = () => {
  if (scrollTop > 100) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};


container.addEventListener("scroll", () => {
  scrollTop = container.scrollTop;
  scrollFunction();
});
button.addEventListener("click", () => {
  container.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* This function slows down the video by 15% 1 being 100% */

video.playbackRate = 0.85;

/* Auto-scroller */

$(document).ready(function(){
  $('.sliders').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});