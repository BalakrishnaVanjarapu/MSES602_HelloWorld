
const http = require('http');
const fs = require('fs'); // To read the HTML file
const path = require('path'); // To resolve file paths
const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Default route: Display "Hello World" text
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World. My name is Bala');
    } else if (req.url === '/hello.html') {
        // Handle /hello.html route: Serve the HTML page
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');






       res.end('Hello World. My name is Balakrishna Vanjarapu'); 
        // Read the hello.html file from the filesystem
        fs.readFile(path.join(__dirname, 'hello.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading the hello.html file');
            } else {
                res.end(data); // Send the content of hello.html
            }
        });
    } else {
        // Handle 404 for other routes
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {


    console.log('Server running at http://${hostname}:${port}/');
});













