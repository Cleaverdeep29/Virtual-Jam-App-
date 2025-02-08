import Room from '../models/Room.js'; // Assuming a Room model exists

// Create a new room
export const createRoom = async (req, res) => {
  try {
    const { roomName } = req.body;
    const newRoom = await Room.create({ name: roomName });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Join an existing room
export const joinRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ error: 'Room not found' });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// List all rooms
export const listRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a room
export const deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    await Room.findByIdAndDelete(roomId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
