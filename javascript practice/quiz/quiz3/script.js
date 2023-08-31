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
const ul = document.createElement("ul");
let answers = [];
let check = 0;

divMain.className = "main";

header.textContent = "Latihan Soal Javascript";

divMain.appendChild(header);
document.body.appendChild(divMain);

for (let i = 0; i < quizzes.length; i++) {
  const userAnswer = [];
  const div = document.createElement("div");
  const span = document.createElement("span");
  const ul = document.createElement("ul");
  const choices = quizzes[i].pilihan;
  let correctAnswer = [];
  const divScore = document.createElement("div");
  divScore.setAttribute("class", "score");

  div.className = "divSoal";
  span.className = "pertanyaan";
  span.textContent = quizzes[i].soal;

  if (i <= 0) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  for (let j = 0; j < choices.length; j++) {
    const li = document.createElement("li");
    const spanJawaban = document.createElement("span");
    const input = document.createElement("input");

    input.type = "radio";
    input.setAttribute("name", i);
    input.setAttribute("class", i);
    input.value = choices[j].id;

    input.addEventListener("click", function (element) {
      userAnswer.push(i, element.target.value);
      answers.push(userAnswer);

      const groupInput = document.getElementsByClassName(i);
      Array.from(groupInput).forEach((disableInput) => {
        disableInput.disabled = true;
      });

      if(i < 2) {
        element.target.parentNode.parentNode.parentNode.nextElementSibling.style.display = "block";
      }
      correctAnswer.push(i, quizzes[i].kunciJawaban);

      if (
        correctAnswer[0] == userAnswer[0] &&
        correctAnswer[1] == userAnswer[1]
      ) {
        check = check + 1;
      }

      if (i >= (quizzes.length - 1)) {
        const score = (check / quizzes.length) * 100;
        console.log(score);
        divScore.textContent = "Score Anda " + Math.round(score);

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
