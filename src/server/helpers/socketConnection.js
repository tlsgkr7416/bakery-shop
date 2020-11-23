module.exports = (io) => {
    io.on('connection', (socket) => {
       socket.on('client sale message', data => {          
           io.emit('server sale message', data);
       });
    });
}