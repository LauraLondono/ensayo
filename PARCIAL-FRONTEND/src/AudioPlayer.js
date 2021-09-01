const audio = document.querySelector("#song");
const playPause = document.querySelector("#icon");


playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector("#pause").classList.remove("hide");
    playPause.querySelector("#play").classList.add("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector("#pause").classList.add("hide");
    playPause.querySelector("#play").classList.remove("hide");
  }
});