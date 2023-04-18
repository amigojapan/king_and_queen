//const app = require('express')();
var express = require('express');
var app = express();
app.use(express.static('public'));

const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3003;



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/jquery-1.7.min.js', (req, res) => {
  res.sendFile(__dirname + '/jquery-1.7.min.js');
});
app.get('/example.css', (req, res) => {
  res.sendFile(__dirname + '/example.css');
});
app.get('/deckType.js', (req, res) => {
  res.sendFile(__dirname + '/deckType.js');
});
app.get('/cards.js', (req, res) => {
  res.sendFile(__dirname + '/cards.js');
});app.get('/example.js', (req, res) => {
  res.sendFile(__dirname + '/example.js');
});



io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
