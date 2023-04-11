const fs = require('fs');

const requestHandler = (request, response) => {
    url = request.url;
    method = request.method;

    if (request.url === '/') {
        response.write("<html>");
        response.write("<head><title> Enter Message </title></head>");
        response.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body");
        response.write("</html>");
        return response.end();
    }

    if (request.url === '/message' && method == 'POST') {
        const body = []

        request.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });

        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt', message, err => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title> My First Page </title></head>');
    response.write('<body><h1> Hello from my Node.js Server </h1></body>');
    response.write('</html>');
    response.end();
}

module.exports = requestHandler;