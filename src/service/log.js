const fs = require('fs');

module.exports = {

    stream: null,

    info: function ( message ) {
        if ( ! this.stream ) {
            this.init();
        }

        this.stream.write( format( new Date(), 'INFO ', message ) );
    },

    warn: function ( message ) {
        if ( ! this.stream ) {
            this.init();
        }

        this.stream.write( format( new Date(), 'WARN ', message ) );
    },

    error: function ( message ) {
        if ( ! this.stream ) {
            this.init();
        }

        this.stream.write( format( new Date(), 'ERROR', message ) );
    },

    debug: function ( message ) {
        if ( ! this.stream ) {
            this.init();
        }

        this.stream.write( format( new Date(), 'DEBUG', message ) );
    },

    init: function () {
        this.stream = fs.createWriteStream('app.log', { flags: 'a' } );
    }

}

function format ( date, level, message ) {
    return `${date.toISOString()} [${level}] ${message} \n`;
}
