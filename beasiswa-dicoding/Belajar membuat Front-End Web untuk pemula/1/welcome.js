const gambar = document.getElementById("gambar");
gambar.setAttribute("width", 300);
gambar.setAttribute("height", 215);

const buttons = document.querySelectorAll(".button");
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButton.setAttribute("type", "submit");

for (const button of buttons) {
  button.children[0].style.borderRadius = "6px";
}

const dicoding = document.getElementById("dicodingLink");
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";

const googlelink = document.getElementById("googleLink");
googlelink.innerHTML = "<i>Mencari sesuatu di Google</i>";
