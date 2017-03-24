'use strict';
const video = document.getElementById('video');
const captionWrapper = document.querySelector('.container');
const captions = document.querySelectorAll('main span');


// Click on caption text to nagivate video
captionWrapper.addEventListener('click', (event) => {
  let newTime = event.target.getAttribute('data-start');
  video.setCurrentTime(newTime);
});

// Highlight captions
video.addEventListener('timeupdate', () => {
  for(let i = 0; i < captions.length; i++) {
    let time = video.currentTime;
    let captionStart = captions[i].getAttribute('data-start');
    let captionEnd = captions[i].getAttribute('data-end');
    if (time >= captionStart &&  time <= captionEnd){
      captions[i].className = 'highlight';
    }else{
      captions[i].className = '';
    }
  }
});
