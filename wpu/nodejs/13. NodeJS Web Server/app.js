const http = require('http');
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('Error: File not found');
        } else {
            res.write(data);
        }
        res.end();
});
}

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const url = req.url;

        switch(url) {
            case '/about':
                renderHTML('./about.html',res);
                break;
            case '/contact':
                renderHTML('./contact.html',res);
                break;
            default:
                renderHTML('./index.html',res);
                break;
        }


        // if(url === '/about') {
        //     renderHTML('./about.html',res);
        // } else if(url === '/contact') {
        //     renderHTML('./contact.html', res);
        // } else {
        //     // res.write('Hello World');
        //     renderHTML('./index.html', res);
        // }
})
    .listen(3000, () => {
    console.log('Server is listening on port 3000..');
});