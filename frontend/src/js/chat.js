const socket = io(); // Initialize socket.io

// Function to send a chat message
export const sendMessage = (message) => {
    socket.emit('send-message', { message });
};

// Listen for incoming messages
socket.on('receive-message', (data) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = data.message;
    document.getElementById('chat-window').appendChild(messageElement);
});

// Function to handle form submission for chat
document.getElementById('chat-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = ''; // Clear input field
});
