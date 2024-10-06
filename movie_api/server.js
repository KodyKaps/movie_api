const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


function logRequest(requestUrl) {
    const timestamp = new Date().toISOString(); 
    const logEntry = `Time: ${timestamp} | URL: ${requestUrl}\n`;


    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file', err);
        }
    });
}


const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;

    logRequest(request.url);

    if (pathname.includes('documentation')) {
        const filePath = path.join(__dirname, 'documentation.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('Error loading the documentation file');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
