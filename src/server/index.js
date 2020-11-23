const app = require('./app');

const port = 3001;
const server = app.listen(port, () => {
    console.log('..connection');
});

const listen = require('socket.io');
const io = listen(server);

require('./helpers/socketConnection')(io);
