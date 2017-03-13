$('video').mediaelementplayer();
let i = 0;
const captionWrapper = document.querySelector('.container');
const spans = document.querySelectorAll('main span');
const captionTime = [
  [0, 4.130],
  [4.130, 7.535],
  [7.535, 11.270],
  [11.270, 13.960],
  [13.960, 17.940],
  [17.940, 22.370],
  [22.370, 26.880],
  [26.880, 30.920],
  [30.920, 34.730],
  [34.730, 39.430],
  [39.430, 41.190],
  [41.190, 46.300],
  [46.300, 49.270],
  [49.270, 53.760],
  [53.760, 57.780],
  [57.780, 61]
];
function highlightCaption(span, hightlight = 'yes'){
  if (hightlight == 'yes'){
    span.style.color = '#42b983';
    span.style.fontWeight = 'bold';
  }else if(hightlight == 'reset') {
    span.style.color = '#34495e';
    span.style.fontWeight = 'normal';
  }
}
// Click on caption text to nagivate video
captionWrapper.addEventListener('click', (event) => {
  // Clear Highlight
  for(let j = 0, l = spans.length; j < l; j++){
    highlightCaption(spans[j], 'reset');
  }
  // Jump video to the caption's start time
  let startTime = event.target.className;
  video.pause();
  video.setCurrentTime(captionTime[startTime][0]);
  i = startTime;
});
// Highlight captions
video.addEventListener('timeupdate', () => {
  let caption = document.getElementsByClassName(i)[0];
  if (video.getCurrentTime() >= captionTime[i][0] &&  video.getCurrentTime() < captionTime[i][1]){
    highlightCaption(caption);
  }else if (!video.paused){
    highlightCaption(caption, 'reset');
    i++;
  }
});
