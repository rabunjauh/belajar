const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname});
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname});
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});















// const http = require('http');
// const fs = require('fs');

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('Error: File not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
// });
// }

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-type': 'text/html'
//         });

//         const url = req.url;

//         switch(url) {
//             case '/about':
//                 renderHTML('./about.html', res);
//                 break;
//             case '/contact':
//                 renderHTML('./contact.html', res);
//                 break;
//             default:
//                 renderHTML('./index.html', res);
//                 break;
//         }


//         // if(url === '/about') {
//         //     renderHTML('./about.html',res);
//         // } else if(url === '/contact') {
//         //     renderHTML('./contact.html', res);
//         // } else {
//         //     // res.write('Hello World');
//         //     renderHTML('./index.html', res);
//         // }
// })
//     .listen(3000, () => {
//     console.log('Server is listening on port 3000..');
// });