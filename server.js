const http = require('http')
const app = require('./app')
require('./db/db'); 

const port = 8181

var server = http.createServer(app)
server.listen(port, () => {
    console.log(`server listen to port ${port}`);

});