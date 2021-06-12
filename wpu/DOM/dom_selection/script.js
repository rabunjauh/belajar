// DOM Selection
// getElementById mengembalikan element

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Mustafa';

// document.getElementsByTagName() mengembalikan HTMLCollections

// const p = document.getElementsByTagName('p');

// p[2].style.backgroundColor = 'red';

// meskipun hanya 1 element getElementByTagName tetap akan mengembalikan HTMLCollection
// const h1 = document.getElementsByTagName('h1')[0];

// h1.style.fontSize = '50px';


// document.getElementsByClassName() mengembalikan HTMLCollection

// const p1 = document.getElementsByClassName('p1')[0];

// p1.innerHTML = 'Ini dirubah dr javascript';

// document.querySelector() mengembalikan element
// jika element yg di tangkap lebih dr 1 maka hanya element pertama yg dikembalikan

// const p4 = document.querySelector('#b p');

// p4.style.color = 'green';
// p4.style.fontSize = '40px';

// li2 = document.querySelector('section#b ul li:nth-child(2)');

// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll() mengembalikan nodeList

// const p = document.querySelectorAll('p');
// for ( let i = 0; i <= p.length; i++ ){
// 	p[i].style.backgroundColor = 'lightblue';
// }

// mengubah node root

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.color = 'red';