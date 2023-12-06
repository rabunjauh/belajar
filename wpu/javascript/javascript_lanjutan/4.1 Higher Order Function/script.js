function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
  selesai();
}

function selesai() {
  alert("Selesai mengerjakan tugas");
}

kerjakanTugas("Pemgrogaman Web", selesai);

// function selesai (function sebagai argument) = Callback
// function kerjakanTugas (function yg mengandung function sebagai argument) = High Order Function

// Kenapa harus menggunakan Higher Order Function?
// 1. Abstraksi (agar kode yang dibuat menjadi lebih sederhana)
