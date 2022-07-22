const express = require('express'); 
const app = express();
const http = require('http');
const cors = require('cors'); //deal with socket errors
const {Server} = require('socket.io'); //allows bidirectional communication between client and server

app.use(cors());

const server = http.createServer(app);

//create socket to connect client and server 
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", //which urls can access
        methods: ['GET', 'POST'] //which methods we can use
    }
});

io.on("connection", (socket) => {
    console.log(`Connected ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`Joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("goodbye.");
    });
})

server.listen(3001, () => {
    console.log('SERVER RUNNING')
});