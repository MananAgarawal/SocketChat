const express = require('express');
const http = require('http')
const socketIO = require('socket.io');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config()
const jsonParser = bodyParser.json();
import { Socket } from "socket.io";
const { instrument } = require('@socket.io/admin-ui')



const app = express();
const server = http.createServer(app, {
    cors: {
        cors: {
            origin: ['http://localhost:3000', 'https://admin.socket.io' ],
            credentials: true
          }
      }
});


const io = socketIO(server);
const connectMongoAtlas = require('./connection');

const port = process.env.PORT || 8080;



io.of('/socket').on('connection', (socket : Socket) => {
    console.log('Someone connected with socket id :', socket.id);

    socket.on('send-message', (msg : string , chatid : string) => {
        socket.to(chatid).emit("recieve-msg", msg)
        console.log(msg)
    })

    socket.on("pv-chat", (room : string) => {
        socket.join(room)
    })

    socket.on('leave-prev-chat', () => {
    
        const rooms = socket.rooms       
        rooms.forEach((room) => {
            if(room !== socket.id){
                socket.leave(room);
            }
        });
    })


    socket.on('disconnect', () => {
        console.log('Someone disconnected with id' , socket.id);
    });
})




app.use(cors());
app.use(jsonParser);


connectMongoAtlas(process.env.MONGO_CONNECTION_STRING);

const auth = require('./routes/Authorisation');
app.use("/", auth);

const add = require('./routes/Adduser');
app.use("/add", add)

const AllChats = require('./routes/AllChats');
app.use("/allchats", AllChats)

server.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

instrument(io, {auth : false})