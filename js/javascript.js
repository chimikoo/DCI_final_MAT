/* This function slows down the video by 15% 1 being 100% */
const video = document.getElementById("background-video");
video.playbackRate = 0.85;

const container = document.getElementById("scroll-listener");
const button = document.getElementById("back-to-top-button");

const scrollFunction = () => {
  if (scrollTop > 100) {
    document.getElementById("back-to-top-button").style.display = "block";
  } else {
    document.getElementById("back-to-top-button").style.display = "none";
  }
};

let scrollTop;
container.addEventListener("wheel", () => {
  scrollTop = container.scrollTop;
  scrollFunction();
});
button.addEventListener("click", () => {
  container.scrollTop = 0;
});
