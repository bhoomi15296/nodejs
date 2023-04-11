const http = require('http');


const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title> Main page </title></head>');
        response.write('<body> <form action = "/create-user" method = "POST"> <input type = "text" name = "username"> <button type = "Submit">Send</button> </form> </body>');
        response.write('</html>');
        response.end();
    }

    if (url === '/users') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title> List of Users </title></head>');
        response.write('<body>');
        response.write('<ul>');
        response.write('<li> Ann </li>');
        response.write('<li> Bob </li>');
        response.write('<li> Charlie </li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            const formData = Buffer.concat(body).toString();
            const userName = formData.split('=')[1];
            console.log(userName);
            response.end();
        });

        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
    }
});

server.listen(3000);