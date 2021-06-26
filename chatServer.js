// const express = require('express');
// const app = express();

// app.get('/news/headlines', (req, res) => {
//     res.send('hello from headlines')
// });

// app.get('/news/other', (req, res) => {
//     res.send('hello from other')
// })


// app.listen(3000);

const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');

const port = 3000;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server })  //Websocket server

// const users = {}



app.get('/chatApp', function(req, res) {
 res.sendFile(path.join(__dirname, '/index.html'));
//  res.sendFile('/index.html');
});


wss.on('connection', function connection(ws) {    //check for connection
  ws.on('message', function incoming(data) {      //check for message
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {   //relay the message to all clients
        client.send(data);
      }
    })
  })
})



server.listen(port, function() {
  console.log(`Chat Server is listening on ${port}!`)
})