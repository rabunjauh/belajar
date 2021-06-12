const newP = document.createElement('p');
const newPText = document.createTextNode('New Text');
const sectionA = document.getElementById('a');

newP.appendChild(newPText);
sectionA.appendChild(newP);


const newLi = document.createElement('li');
const newLiText = document.createTextNode('Item Baru');
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

newLi.appendChild(newLiText);
ul.insertBefore(newLi, li2);

const newP2 = document.createElement('p');
const newP2Text = document.createTextNode('New Paragraph 2');
p2 = document.querySelectorAll('section#a p')[1];

newP2.appendChild(newP2Text);
sectionA.insertBefore(newP2, p2);



