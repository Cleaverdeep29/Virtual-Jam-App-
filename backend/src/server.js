import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import socketIo from 'socket.io';
import http from 'http';
import authRoutes from './routes/auth.js'; // Import auth routes



dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use('/rooms', roomRoutes); // Use room routes
app.use('/auth', authRoutes); // Use auth routes



io.on('connection', (socket) => {
  console.log('New connection:', socket.id);
  // Additional socket event handling...
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
