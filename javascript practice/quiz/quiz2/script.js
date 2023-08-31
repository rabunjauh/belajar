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
];

const divMain = document.createElement("div");
const header = document.createElement("h1");

divMain.className = "main";

header.textContent = "Latihan Soal Javascript";

divMain.appendChild(header);
document.body.appendChild(divMain);

quizzes.map((quiz, index) => {
  const div = document.createElement("div");
  div.className = "divSoal";
  const span = document.createElement("span");
  span.className = "pertanyaan";
  const mainArrayIndex = index;
  // console.log(mainArrayIndex);
  const ul = document.createElement("ul");
  const choices = quiz.pilihan;
  let answers = [];

  // if (index <= 0) {
  //   div.style.display = "block";
  // } else {
  //   div.style.display = "none";
  // }
  choices.map((choice, index, mainArrayIndex) => {
    console.log("mainArrayIndex2" + mainArrayIndex);
    const li = document.createElement("li");
    const spanJawaban = document.createElement("span");
    const input = document.createElement("input");

    input.type = "radio";
    input.setAttribute("name", "pilihanJawaban");
    input.setAttribute("class", "pilihanJawaban");
    input.value = choice.id;

    // input.addEventListener("click", (element) => {
    //   input.checked = true;
    //   answers.push(element.target.value);
    //   Array.from(document.getElementsByClassName(mainArrayIndex)).forEach(
    //     (element) => {
    //       element.disabled = true;
    //     }
    //   );
    //   console.log(answers);
    //   console.log(mainArrayIndex);
    // });
    spanJawaban.className = "jawaban";
    spanJawaban.textContent = choice.jawaban;

    li.appendChild(input);
    li.appendChild(spanJawaban);
    ul.appendChild(li);
  });

  span.textContent = quiz.soal;

  div.appendChild(span);
  div.appendChild(ul);
  divMain.appendChild(div);
  document.body.appendChild(divMain);
});
