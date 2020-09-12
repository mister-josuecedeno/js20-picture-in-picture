const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media strewam, pass to video element
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error
    console.log('whoops, error here:', error);
  }
}

button.addEventListener('click', async () => {
  // load selectmedia stream
  selectMediaStream();

  // Disable button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = false;
});

// On load
//selectMediaStream();
