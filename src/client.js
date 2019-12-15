'use strict';

const config = require('./config.json');

var io = require('socket.io-client');

var socket = io.connect( config.serverAddress, 
    {
        reconnect: true,
        query: {
            token: 'secret',
            id: 'pi'
        }
    } 
);

// Add a connect listener
socket.on('connect', function () {
    console.log( socket );
    socket.emit( config.robotChannel )
} );

socket.on(config.robotChannel, function (body) {
	console.log(body);
} );
