const io = require('socket.io-client');
const log = require('../service/log');

module.exports = {

    socket: null,
    channel: null,

    connect: function ( address, channel ) {
        this.channel = channel;
        this.socket = io.connect( address,
            {
                reconnect: true,
                query: {
                    token: 'secret',
                    id: 'pi'
                }
            }
        );
    },

    onConnect: function ( callback ) {
        if ( this.socket ) {
            this.socket.on('connect', function () {
                log.info('Connected to central server');
                callback();
            });
        } else {
            throw 'socket not connected';
        }
    },

    onDisconnect: function ( callback ) {
        if ( this.socket ) {
            this.socket.on('disconnect', function () {
                log.info('Disconnected from central server');
                callback();
            });
        } else {
            throw 'socket not connected';
        }
    },

    onCommand: function ( callback ) {
        if ( this.socket ) {
            this.socket.on( this.channel, function ( command ) {
                log.info('Command from server: ' + command );
                callback();
            });
        } else {
            throw 'socket not connected';
        }
    },

    emit: function ( group, argument ) {
        if ( this.socket ) {
            log.info('Emmiting event to central: ' + group + ' ' + argument);
            this.socket.emit( this.channel, group, argument );
        } else {
            throw 'socket not connected';
        }
    }

}

