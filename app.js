const config = require('./config.json');

const socket = require('./src/interface/socket');

socket.connect(config.serverAddress, config.robotChannel);

socket.onConnect( () => {
    socket.emit( 'PI', 'Hello' );
});

socket.onCommand( () => {
});

socket.onDisconnect( () => {
});



const cli = require('./src/interface/cli');

cli.startCli();

cli.onCommand( () => {
    socket.emit('PI', 'Command');
});