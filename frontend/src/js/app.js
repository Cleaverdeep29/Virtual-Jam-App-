import './chat.js';
import './webrtc.js';
import './ticTacToe.js';
import './scribble.js';
import './karaoke.js';


document.addEventListener('DOMContentLoaded', () => {
  // Initialize game buttons
  const ticTacToeButton = document.getElementById('tic-tac-toe-button');
  const scribbleButton = document.getElementById('scribble-button');
  const karaokeButton = document.getElementById('karaoke-button');

  ticTacToeButton.addEventListener('click', () => {
    window.location.href = '/tic-tac-toe'; // Navigate to Tic Tac Toe game
  });

  scribbleButton.addEventListener('click', () => {
    window.location.href = '/scribble'; // Navigate to Scribble game
  });

  karaokeButton.addEventListener('click', () => {
    window.location.href = '/karaoke'; // Navigate to Karaoke game
  });


  scribbleButton.addEventListener('click', () => {
    // Logic to navigate to Scribble game
  });

  karaokeButton.addEventListener('click', () => {
    // Logic to navigate to Karaoke game
  });

  // Initialize video chat and join session
  const joinButton = document.getElementById('join-button');
  joinButton.addEventListener('click', () => {
    const roomId = document.getElementById('room-id').value; // Get room ID from input
    initializeVideoChat(roomId);
  });

});

async function initializeVideoChat(roomId) {

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  const videoElement = document.createElement('video'); 
  // Emit event to join the room
  socket.emit('join-room', roomId);

    videoElement.srcObject = stream;
    videoElement.autoplay = true;
    document.getElementById('video-grid').appendChild(videoElement);
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}
