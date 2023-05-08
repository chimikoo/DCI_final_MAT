/* This function slows down the video by 15% 1 being 100% */
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

video.playbackRate = 0.85;
