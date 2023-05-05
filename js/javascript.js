
    /* This function slows down the video by 15% 1 being 100% */
const video = document.getElementById("background-video");
    video.playbackRate = .85;

    /* This is a function to make the to the top button appear */
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top-button").style.display = "block";
      } else {
        document.getElementById("back-to-top-button").style.display = "none";
      }
    }

