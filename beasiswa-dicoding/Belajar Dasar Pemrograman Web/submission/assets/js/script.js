let btop = document.getElementById("btop");
console.log(btop);

// Menghilangkan tombol back to top saat window di scroll
window.onscroll = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btop.style.display = "block";
  } else {
    btop.style.display = "none";
  }
};

// Saat tombol di klik window akan kembali ke posisi atas
btop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
