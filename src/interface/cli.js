const readline = require('readline');

let callbackMethod;

function startCli() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'R> '
    });


    const commands = {
        pwd: function () {
            console.log(process.cwd());
            rl.prompt();
        },
    
        close: function () {
            rl.close();                     
        }
    }
   

    rl.prompt();

    rl.on('line', function (input) {
        input = input.toLowerCase();
        if (input in commands) {
            commands[input]();
        } else {
            
            callbackMethod();
            rl.prompt();
            // console.log('Unknown command');
            // rl.prompt();
        }
    } );
}

function onCommand ( callback ) {
    callbackMethod = callback;
}

module.exports = {
    startCli,
    onCommand
}