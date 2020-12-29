const http = require('http');

const server = http.createServer(function (req, res) {
    const {headers} = req;

    console.log(headers)

    res.end();
});

const port = 3000;
server.listen(port);

console.log(`Node.js web server at port ${port} is running..`)
