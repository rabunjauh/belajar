const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const url = req.url;
        if(url === '/about') {
            res.write('<h1>Ini adalah halaman About</h1>');
            res.end();
        } else if(url === '/contact') {
            res.write('<h1>Ini adalah halaman Contact</h1>');
            res.end();
        } else {
            // res.write('Hello World');
            fs.readFile('./index.html', (err, data) => {
                if(err) {
                    res.writeHead(404);
                    res.write('Error: File not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
        }
})
    .listen(3000, () => {
    console.log('Server is listening on port 3000..');
});