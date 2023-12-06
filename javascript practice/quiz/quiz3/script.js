// Membuat array data soal, pilihan jawaban & kunci jawaban yang akan ditampilkan di browser
const quizzes = [
  {
    soal: "Di bawah ini merupakan tag javascript yang dapat disisipkan pada dokumen HTML",
    pilihan: [
      { id: "a", jawaban: "<js>" },
      { id: "b", jawaban: "<javascript>" },
      { id: "c", jawaban: "<script>" },
      { id: "d", jawaban: "<jquery>" },
    ],
    kunciJawaban: "c",
  },
  {
    soal: "Di bawah adalah sintak javascript untuk mengambil elemen HTML secara spesifik pada atribut ID",
    pilihan: [
      { id: "a", jawaban: "document.getElementById(“demo”);" },
      { id: "b", jawaban: "document.getElementByName(“demo”);" },
      { id: "c", jawaban: "document.getElementsByClassName(“demo”);" },
      { id: "d", jawaban: "document.getElementsByTagName(“demo”);" },
    ],
    kunciJawaban: "a",
  },
  {
    soal: "Kita dapat menambahkan sintak javascript dalam dokumen HTML pada bagian",
    pilihan: [
      { id: "a", jawaban: "di dalam tag <head>" },
      { id: "b", jawaban: "di dalam tag <body>" },
      { id: "c", jawaban: "Bisa di dalam tag <head> maupun<body>" },
      { id: "d", jawaban: "Tidak bisa keduanya" },
    ],
    kunciJawaban: "c",
  },
  {
    soal: "Berikut adalah sintak yang benar untuk mengambil referensi file javascript demo.js secara eksternal",
    pilihan: [
      { id: "a", jawaban: "<script src=”demo.js”> " },
      { id: "b", jawaban: "<script name=”demo.js”>" },
      { id: "c", jawaban: "<script href=”demo.js”>" },
      { id: "d", jawaban: "<script id=”demo.js”>" },
    ],
    kunciJawaban: "a",
  },
  {
    soal: "Berikut sintak yang benar untuk menulis kalimat Hello World",
    pilihan: [
      { id: "a", jawaban: "document.line(“Hello Wordl”)" },
      { id: "b", jawaban: "document.show(“Hello Wordl”)" },
      { id: "c", jawaban: "document.alert(“Hello Wordl”)" },
      { id: "d", jawaban: "document.write(“Hello Wordl”)" },
    ],
    kunciJawaban: "d",
  },
  {
    soal: "Bagaimana membuat komentar di javascript",
    pilihan: [
      { id: "a", jawaban: "<!–ini komentar–>" },
      { id: "b", jawaban: "*ini komentar*" },
      { id: "c", jawaban: "//ini komentar" },
      { id: "d", jawaban: "/* ini komentar */" },
    ],
    kunciJawaban: "c",
  },
  {
    soal: "Bagaimana membuat komentar di javascript bila lebih dari satu baris kode",
    pilihan: [
      { id: "a", jawaban: "<!–Komentar lebih dari satu baris–>" },
      { id: "b", jawaban: " //Komentar lebih dari satu baris// " },
      { id: "c", jawaban: "</Komentar lebih dari satu baris/>" },
      { id: "d", jawaban: "/*Komentar lebih dari satu baris*/ " },
    ],
    kunciJawaban: "d",
  },
  {
    soal: "Javascript memiliki beberapa tipe data seperti berikut, kecuali;",
    pilihan: [
      { id: "a", jawaban: " List" },
      { id: "b", jawaban: "Numerik" },
      { id: "c", jawaban: "String" },
      { id: "d", jawaban: "Boolean" },
    ],
    kunciJawaban: "a",
  },
  {
    soal: "Berikut cara membuat variabel yang benar di javascript",
    pilihan: [
      { id: "a", jawaban: "declare nama_variabel;" },
      { id: "b", jawaban: "variable nama_variabel;" },
      { id: "c", jawaban: "var nama_variabel;" },
      { id: "d", jawaban: "nama_variabel;" },
    ],
    kunciJawaban: "c",
  },
  {
    soal: "Berikut adalah contoh penulisan nama variabel yang SALAH",
    pilihan: [
      { id: "a", jawaban: "var nama;" },
      { id: "b", jawaban: "var usia+;" },
      { id: "c", jawaban: "var jenis_kelamin;" },
      { id: "d", jawaban: "var nilai;" },
    ],
    kunciJawaban: "b",
  },
];

// Buat element main div
const divMain = document.createElement("div");
// Buat element header
const header = document.createElement("h1");
// Buat element ul
const ul = document.createElement("ul");
// Deklarasikan variabel answers yang akan menampung semua jawaban user
let answers = [];
// Deklarasikan variabel check yang akan mengecek setiap jawaban user
let check = 0;

// Tentukan class div main
divMain.className = "main";

// Buat textContent header
header.textContent = "Latihan Soal Javascript";

// Kaitkan header ke divMain untuk ditampilkan di browser
divMain.appendChild(header);
// Kaitkan divMain ke body untuk ditampilkan di browser
document.body.appendChild(divMain);
// Perulangan untuk membuat setiap soal sebanyak isi array quizzes
for (let i = 0; i < quizzes.length; i++) {
  // Deklarasikan variabel array userAnswer untuk menampung jawaban user di masing-masing soal
  const userAnswer = [];
  const div = document.createElement("div");
  const span = document.createElement("span");
  const ul = document.createElement("ul");

  // Deklarasikan variabel untuk menampung array pilihan berganda agar bisa dilooping
  const choices = quizzes[i].pilihan;
  // Deklarasikan variabel correctAnswer untuk menampung array jawaban yang benar sesuai kunciJawaban
  let correctAnswer = [];
  // Deklarasikan variabel divScore untuk nilai
  const divScore = document.createElement("div");
  // Menentukan class divScore
  divScore.setAttribute("class", "score");

  div.className = "divSoal";
  span.className = "pertanyaan";
  const urutan = i + 1;
  // set textContent span soal
  span.textContent = urutan + ". " + quizzes[i].soal;

  // Kondisi awal soal yang ditampilkan hanya soal no 1
  if (i <= 0) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  // Looping untuk membuat pilihan berganda
  for (let j = 0; j < choices.length; j++) {
    const li = document.createElement("li");
    const spanJawaban = document.createElement("span");
    const input = document.createElement("input");

    // Buat element radioButton note: input name harus berbeda agar hanya salah satu radio button yg terselect per soal
    input.type = "radio";
    input.setAttribute("name", i);
    input.setAttribute("class", i);
    // Set value input dengan id kunciJawaban
    input.value = choices[j].id;

    // Event listener setiap radio button di click
    input.addEventListener("click", function (element) {
      // push index array Soal no 1 yaitu 0 dan value dari radio button yang dipilih yaitu id kunciJawaban ke dalam variabel userAnswer
      userAnswer.push(i, element.target.value);
      // Push userAnswer kedalam variabel answer untuk dicek apakah jawaban user sesuai dengan soal dan kunci jawaban setiap soal
      answers.push(userAnswer);

      // Deklarasikan variabel groupInput untuk menampung semua radioButton per soal
      const groupInput = document.getElementsByClassName(i);
      // Perulangan untuk disable semua radioButton setelah salah 1 radioButton per soal dipilih
      Array.from(groupInput).forEach((disableInput) => {
        disableInput.disabled = true;
      });

      // Kondisi jika soal sebelumnya sudah dijawab maka soal selanjutnya akan muncul
      if (i < quizzes.length - 1) {
        element.target.parentNode.parentNode.parentNode.nextElementSibling.style.display =
          "block";
      }
      // push index soal dan kunciJawaban kedalam variabel correctAnswer
      correctAnswer.push(i, quizzes[i].kunciJawaban);

      // Jika jawaban user identik dengan nomor soal(index array) & kunciJawaban maka variable check akan increment berarti jawaban user benar
      if (
        correctAnswer[0] == userAnswer[0] &&
        correctAnswer[1] == userAnswer[1]
      ) {
        check = check + 1;
      }

      // kondisi untuk menentukan skor nilai
      if (i >= quizzes.length - 1) {
        const score = (check / quizzes.length) * 100;
        console.log(score);
        divScore.textContent = "Score Anda adalah: " + Math.round(score);

        divMain.appendChild(divScore);
        document.body.appendChild(divMain);
      }
    });

    spanJawaban.className = "jawaban";
    spanJawaban.textContent = choices[j].id + ". " + choices[j].jawaban;

    li.appendChild(input);
    li.appendChild(spanJawaban);
    ul.appendChild(li);
  }

  div.appendChild(span);
  div.appendChild(ul);
  divMain.appendChild(div);
  document.body.appendChild(divMain);
}
