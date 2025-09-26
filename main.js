var typed = new Typed(".text", {
  strings: ["Problem Solver.", "Creative Coder.", "Passionate Learner."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
var ft = 1;
const video = document.getElementById('myVideo');
const unmuteBtn = document.getElementById('unmuteBtn');
unmuteBtn.addEventListener('click', () => {
  if (ft == 1) {
    unmuteBtn.textContent = "🔊";
    video.muted = false;
    video.play();
    ft = ft + 1;
  }
  else {
    if (video.paused) {
      video.play();
      video.muted = false;
      unmuteBtn.textContent = "🔊";
    } else {
      video.pause();
      video.muted = true;
      unmuteBtn.textContent = "🔇";
    }
  }
});

