import { io } from 'socket.io-client'

const socket = io('http://localhost:5000/socket', {
    transports: ['websocket']
 });

const disconnectsocket = () => {
    if(socket.connected){
        socket.disconnect();
        console.log("socket disconnected");
    } else {
        console.log("sockt is not connected");
    }
}

export default socket; // Exporting the socket object
export { disconnectsocket }; // Exporting the disconnectsocket function
