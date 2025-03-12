const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  name: { type: String, required: false },
  width: { type: Number, required: false },
  length: { type: Number, required: false },
  x: { type: Number, required: false },
  y: { type: Number, required: false },
  color: { type: String, default: "#FFFFFF" }
});

const WallSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  roomId: { type: Number, required: false },
  position: { 
    type: String, 
    enum: ['top', 'right', 'bottom', 'left'], 
    required: false 
  },
  length: { type: Number, required: false },
  x: { type: Number, required: false },
  y: { type: Number, required: false },
  orientation: { 
    type: String, 
    enum: ['horizontal', 'vertical'], 
    required: false 
  }
});

const DoorSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  roomId: { type: Number, required: false },
  wallId: { type: Number, required: false }, // Reference to the wall
  width: { type: Number, required: false },
  position: { 
    type: String, 
    enum: ['top', 'right', 'bottom', 'left'], 
    required: false 
  },
  offset: { type: Number, required: false }
});

const WindowSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  roomId: { type: Number, required: false },
  wallId: { type: Number, required: false }, // Reference to the wall
  width: { type: Number, required: false },
  position: { 
    type: String, 
    enum: ['top', 'right', 'bottom', 'left'], 
    required: false 
  },
  offset: { type: Number, required: false }
});

const FloorplanSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rooms: [RoomSchema],
  walls: [WallSchema],
  doors: [DoorSchema],
  windows: [WindowSchema],
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Floorplan', FloorplanSchema);