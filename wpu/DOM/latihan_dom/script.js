const btn = document.getElementById('button');


btn.onclick = function (){
	// document.body.style.backgroundColor = 'red';
	// alert('ok');
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
}