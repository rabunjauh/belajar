const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts.js');


const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

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
    mahasiswa,
    layout: 'layouts/main-layout'
    });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    layout: 'layouts/main-layout'    
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', {
    title: 'Contact',
    layout: 'layouts/main-layout',
    contacts
  });
});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('detail', {
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact
  });
});

// jika user memilih url yang tidak ada akan diarahkan ke halaman 404
app.use('/', (req, res) => {
    res.status(404);
    res.send('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


