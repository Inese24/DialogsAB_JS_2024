/* Šie mainīgie ir objekti: `video`, `play`, `stop`, `progrees` un `timestamp` */
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video. Video atskaņošana un pauzēšana. 
/* Funkcija `toggleVideoStatus` pārbauda, vai video ir pauzēts? To var izmantot, lai pārslēgtu starp atskaņošanu un pauzēšanu.
  Nosacījuma operators `if...else` - pārbauda, vai video ir pauzēts un maina tā stāvokli.
  Ja `if` nosacījums `video.paused` ir patiess (true), tad tiek izpildīts koda fragments `video.play`.
  Ja `if` nosacījums `video.paused` nav patiess (false), tad atslēgvārds `else` norāda, ka tiks izpildīts koda fragments `video.pause` - video tiks pauzēts.
  Ja `if` nosacījums `video.paused` ir patiess (true), tad `else` izpilda koda fragmentu `video.play` - video tiek atskaņots.
*/
  function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon. Atjaunina atskaņošanas/pauzēšanas ikonu.
/* `function upadatePlayIcon` atjaunina `play` pogas ikonu atkarībā no video statusa (atskaņošana vai pauzēšana).
*/
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp. Atjaunināšanas progress un laika zīmogs. 
/* `function updateProgress` atjaunina progresa joslu un laika zīmogu.
   `progress.value` tiek iestatīta pamatojoties uz attiecību starp pašreizējo laiku un video ilgumu. 
   Laika zōmogs tiek formatēts minūtēs un sekundēs.
*/
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if(mins < video.duration){
    mins = '0' + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if(secs < video.duration){
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress. Video progresa laika iestatīšana
/* `function setVideoprogress` iestata pašreizējo video atskaņošanas laiku, pamatojoties uz progresa joslas vērtību.
  Tā lietotājam tiek ļauts mainīt video atskaņošanas pozīciju, velkot progresa joslu.   
*/
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video. Video apturēšana.
/* `function stopVideo` aptur video atskaņošanu un atgriež video atskaņošanas laiku un nulli, jeb atgriež video atskaņošanu sākuma pozīcijā.
*/
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners objekti 5 gab.: `tooggleVideoStatus`, `upadatePayIcon`, `upadateProgress`, `stopVideo` un `setVideoProgress`.
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);