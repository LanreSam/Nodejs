const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is the about page.');
    }

    res.end(`<h1>Oops!!!</h1>
        <p>Page not find</p>
    `);

});

server.listen(2000);