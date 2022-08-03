const express = require('express')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Mahasiswa 1',
      email: 'mahasiswa1@gmail.com'
    },
    {
      nama: 'Mahasiswa 2',
      email: 'mahasiswa2@gmail.com'
    },
    {
      nama: 'Mahasiswa 3',
      email: 'mahasiswa3@gmail.com'
    },
  ]
  res.render('index', {
    nama: 'Mustafa', 
    title: 'Halaman Home',
    mahasiswa
    });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


