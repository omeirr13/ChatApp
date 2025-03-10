const { createServer } = require('http');
const httpServer = createServer();
const io = require('socket.io')(httpServer, {
    cors: {
        origin: ['http://localhost:3000']//cross site request forgery
    }
});

let users = {};
let pendingMessages = {};

io.on('connection', socket => {
    socket.on('login', userData => {
        socket.username = userData.email;
        console.log(`logging in: ${userData.email} for socket id: ${socket.id}`);
        users[userData.email] = socket.id;

        if (pendingMessages[userData.email]) {
            console.log('got', pendingMessages[userData.email]);
            Object.values(pendingMessages[userData.email]).forEach(message => {
                console.log('going to emit', message);
                console.log(userData.email);
                const socketId = users[userData.email];
                console.log(socketId);
                // io.to(socketId).emit('privateChat', message);
                socket.emit('privateChat', message);
                // socket.emit('updateLastChatWith');
            });
            delete pendingMessages[userData.email];
        }
        console.log(users);
        return () => {
            socket.off("login", callback);
        }
    });


    socket.on('private_chat', (data) => {
        // console.log(data);
        const to = data.receiverEmail;
        const message = data.content;
        const from = data.senderEmail;

        console.log(`message from ${from} to ${to}: ${message}`);
        if (users.hasOwnProperty(to)) {
            const socketId = users[to];
            console.log('receiver socket ID:', socketId);

            io.to(socketId).emit('privateChat', data);
            io.to(socketId).emit('updateLastChatWith', data);
        } else {

            console.log(`User ${to} is not connected. Storing his message`);
            if (!pendingMessages[to]) {
                pendingMessages[to] = {};
            }
            pendingMessages[to][from] = data;
            console.log(pendingMessages);
            socket.emit('notConnected', data);
        }
    });

    socket.on('disconnect', () => {
        console.log(users);

        console.log(`Socket ${socket.id} disconnected.`);
        for (let key in users) {
            if (users[key] === socket.id) {
                delete users[key];
                console.log(`User ${key} removed from users.`);
                break;
            }
        }
        console.log(users);

    });
    socket.on('logout', (userData) => {
        const userEmail = userData.email;
        console.log(users);
        if (users.hasOwnProperty(userEmail)) {
            delete users[userEmail];
            console.log(`user ${userEmail} logged out!`);
        }
        console.log(users);
    });

});

httpServer.listen(4000, () => {
    console.log('Socket.IO server listening on port 4000');
});


