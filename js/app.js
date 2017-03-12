$('video').mediaelementplayer();
let i = 1;
let videoWrapper = document.querySelector('.video');
let captionWrapper = document.querySelector('.container');
let captionTime = [
  [0, 0],
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
  [57.780, 60.150],
  [0, 0]
];

captionWrapper.addEventListener('click', (event) => {
  let number = event.target.className;
  video.setCurrentTime(captionTime[number][0]);
});

video.addEventListener('playing', () => {
  video.addEventListener('timeupdate', () => {
    let caption = document.getElementsByClassName(''+i+'')[0];
    if (video.getCurrentTime() > captionTime[i][0] &&  video.getCurrentTime() < captionTime[i][1]){
      caption.style.color = '#42b983';
    }else {
      caption.style.color = 'black';
      i++;
    }
  });
});
