// // const judul = document.getElementById('judul');
// // judul.innerHTML = '<em>Mustafa</em>';

// // const sectionA = document.querySelector('section#a');
// // sectionA.innerHTML = 'hello world';

// // setAttribute

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'judul_h1');

// // removeAttribute

// Node Manipulation
// document.createElement()
// documnt.createTextNode()
// node.appendChild() --> membuat element di bagian akhir element parent

// buat element baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section a
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// node.insertBefore() --> membuat element di bagian tengah element parent
// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');
// ul.insertBefore(liBaru, li2);

// parentNode.removeChild();

// const sectionA = document.getElementById('a');
// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// parentNode.replaceChild()

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);




