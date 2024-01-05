import { io } from 'socket.io-client'

const URL = 'http://localhost:5000/socket'

export const socket = io(URL, {
    transports: ['websocket']
});