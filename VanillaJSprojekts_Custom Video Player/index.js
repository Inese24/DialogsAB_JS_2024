const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timeStamp");

// play pause video

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play pause icon

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class = "fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class = "fa fa-pause fa-2x"></i>';
  }
}

// update progress

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mints = Math.floor(video.currentTime / 60);
  if (mints < 10) {
    mints = "0" + String(mints);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mints}:${secs}`;
}

// set video progress

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// stop video

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);



<script>
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    video1.addEventListener('timeupdate', () => {
        if (video1.currentTime >= 53 && video1.currentTime <= 58) {
            video1.style.opacity = 1 - (video1.currentTime - 53) / 5;
            video2.style.opacity = (video1.currentTime - 51) / 5;
            if (video2.paused) {
                video2.currentTime = video1.currentTime - 51;
                video2.play();
            }
        }
    });

    video1.addEventListener('ended', () => {
        video2.play();
    });
</script>

