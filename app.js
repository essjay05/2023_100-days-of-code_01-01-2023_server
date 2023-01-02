// creating a server
const http = require('http')
const { someText } = require('./routes')
const routes = require('./routes')

console.log(someText)

const server = http.createServer(routes.handler)

server.listen(3000)