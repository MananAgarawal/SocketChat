const express = require('express');
const http = require('http')
const socketIO = require('socket.io');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config()
const jsonParser = bodyParser.json();
import { Socket } from "socket.io";



const app = express();
const server = http.createServer(app, {
    cors: {
        cors: {
            origin: 'http://localhost:3000',
            credentials: true
          }
      }
});
const io = socketIO(server);
const connectMongoAtlas = require('./connection');

const port = process.env.PORT || 8080;



io.of('/socket').on('connection', (socket : Socket) => {
    console.log('Someone Connected here');

    socket.on('disconnect', () => {
        console.log('Someone disconnected');
    });
})


app.use(cors());
app.use(jsonParser);


connectMongoAtlas(process.env.MONGO_CONNECTION_STRING);

const auth = require('./routes/Authorisation');
app.use("/", auth);

const add = require('./routes/Adduser');
app.use("/add", add)

server.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});