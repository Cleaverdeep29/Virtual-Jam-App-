export default (io) => {
  io.on('connection', (socket) => {
    console.log('New connection:', socket.id);

    socket.on('join-room', (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit('user-connected', socket.id);
    });

    socket.on('send-message', (data) => {
      io.to(data.roomId).emit('receive-message', data);
    });

    socket.on('start-jam', (roomId) => {
      // Logic to start a jam session
      console.log(`Jam session started in room: ${roomId}`);
      io.to(roomId).emit('jam-started', { message: 'Jam session has started!' });
    });

    socket.on('stop-jam', (roomId) => {
      // Logic to stop a jam session
      console.log(`Jam session stopped in room: ${roomId}`);
      io.to(roomId).emit('jam-stopped', { message: 'Jam session has ended!' });
    });

    socket.on('disconnect', () => {

      console.log('User disconnected:', socket.id);
    });
  });
};
