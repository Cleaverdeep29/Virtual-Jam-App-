const socket = io(); // Initialize socket.io

let localStream;
let peerConnections = {};

// Function to initialize WebRTC
export const initializeWebRTC = (roomId) => {
  socket.emit('join-room', roomId);

  socket.on('user-connected', (userId) => {
    console.log('User connected:', userId);
    // Create a new peer connection for the new user
    createPeerConnection(userId);
  });

  socket.on('receive-message', (data) => {
    // Handle incoming messages
    console.log('Message received:', data);
  });

  socket.on('jam-started', (data) => {
    console.log(data.message);
  });

  socket.on('jam-stopped', (data) => {
    console.log(data.message);
  });
};

// Function to create a new peer connection
const createPeerConnection = (userId) => {
  const peerConnection = new RTCPeerConnection();

  // Add local stream to the peer connection
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit('send-message', { userId, candidate: event.candidate });
    }
  };

  peerConnection.ontrack = (event) => {
    const videoElement = document.createElement('video');
    videoElement.srcObject = event.streams[0];
    videoElement.autoplay = true;
    document.getElementById('video-grid').appendChild(videoElement);
  };

  peerConnections[userId] = peerConnection;
};
