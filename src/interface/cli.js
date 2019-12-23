const readline = require('readline');

function startCli() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'R> '
    });


    const commands = {
        pwd: function () {
            console.log(process.cwd());
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
            console.log('Unknown command');
        }
        rl.prompt();
    } );
}

module.exports = {
    startCli
}