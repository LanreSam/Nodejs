const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);


//info about PC uptime
console.log(`The system uptime is: ${os.uptime()} seconds`);

//info about current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);