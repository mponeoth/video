//MDN
/*  the DOMContentLoaded event fires when the initial HTML document has been completely loaded
    and parsed, without waiting for stylesheets, images, subframes, to finish loading. 

    the load event is fired when whole page has loaded, including all dependent resources such as 
    stylesheets and images
*/
    //swichBtn for our toggle in our page
const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    video.pause();
  } else {
    switchBtn.classList.remove("slide");
    video.play();
  }
});

//when its loading the page we see our preloader in our page
//we tried in network by choosing 3g slowng clicking disable cache and renewing our page we can see our preloader 
let preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
