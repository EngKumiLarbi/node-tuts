const os = require('os')

// infor about the user 
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds 
console.log('The System Uptime is ' + os.uptime + ' seconds')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totlaMen: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOS)