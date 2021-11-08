const os = require('os');

//info about current user
const user = os.userInfo()

// method returns system uptime in s
console.log(`The system uptime in ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freemen: os.freemem(),
}
console.log(currentOS);