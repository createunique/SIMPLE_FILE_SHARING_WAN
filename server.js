
const express = require('express');
const { Server } = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = new Server(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function(socket) {
  socket.on('sender-join', function(data) {
    socket.join(data.uid);
  });

  socket.on('receiver-join', function(data) {
    socket.join(data.uid);
    io.to(data.sender_uid).emit('init', data.uid);
  });

  socket.on('file-meta', function(data) {
    io.to(data.uid).emit('fs-meta', data.metadata);
  });

  socket.on('fs-start', function(data) {
    io.to(data.uid).emit('fs-share', {});
  });

  socket.on('file-raw', function(data) {
    io.to(data.uid).emit('fs-share', data.buffer);
  });
});

// module.exports = (req, res) => {
//   return server.emit('request', req, res);
// };

// Catch-all route handler
// app.get('*', (req, res) => {
//   res.status(404).send('Page not found');
// });

server.listen(3000);
