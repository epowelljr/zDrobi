document.addEventListener('DOMContentLoaded', function () {
  const videoFiles = [
    '/sites/default/files/videos/1_vid.mp4',
    '/sites/default/files/videos/2_vid.mp4',
    '/sites/default/files/videos/3_vid.mp4',
    '/sites/default/files/videos/4_vid.mp4',
    '/sites/default/files/videos/5_vid.mp4',
    '/sites/default/files/videos/6_vid.mp4'
  ];

  const videoElement = document.getElementById('bg-video');
  const randomIndex = Math.floor(Math.random() * videoFiles.length);
  videoElement.src = videoFiles[randomIndex];
  videoElement.play();

  videoElement.addEventListener('ended', function () {
    const nextIndex = (randomIndex + 1) % videoFiles.length;
    videoElement.src = videoFiles[nextIndex];
    videoElement.play();
  });
});
