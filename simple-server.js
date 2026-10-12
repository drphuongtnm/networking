// this is the lowest level module, http is built on node module etc
const net = require("net")

const server = net.createServer((socket)=> {
    // if anyone connect to this server, we will have this socket server
    // socket actually is a duplex stream
    socket.on('data', (buff) => {
        console.log(buff);
        
    })
})

server.listen(3099, "127.0.0.1", () => {
    console.log("opened server on", server.address())
})