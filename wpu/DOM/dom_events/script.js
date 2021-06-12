// Event Handler
// 1. inline HTML attribute
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3(){
// 	p3.style.backgroundColor = 'lightblue';
// }




// 2. element  method
// function ubahWarnaP2(){
// 	p2.style.backgroundColor = 'lightblue';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// addEventListener()

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});


// perbedaan penggunaan Events Handler & addEventListener
// even handler -> cara lama, ketika kita memberikan lebih dari 1 perubahan 
// pada even handler perubahan yg lama akan ditimpa sedangkan pada add event listener tidak

// contoh Event Handler -> yang dijalankan adalah event yg terakhir event yg pertama diabaikan
// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightblue';
// } 

// p3.onclick = function() {
// 	p3.style.color = 'red';
// }

// contoh addEventListener
const p3 = document.querySelector('.p3');
p3.addEventListener('click', function() {
	p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function() {
	p3.style.color = 'red';
});

// event lengkap lihat : https://developer.mozilla.org/en-US/docs/Web/Events
