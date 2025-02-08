import express from 'express';
import { createRoom, joinRoom, listRooms, deleteRoom } from '../controllers/roomController.js';

const router = express.Router();

// Room routes
router.post('/', createRoom);
router.get('/:roomId', joinRoom);
router.get('/', listRooms);
router.delete('/:roomId', deleteRoom);

export default router;
