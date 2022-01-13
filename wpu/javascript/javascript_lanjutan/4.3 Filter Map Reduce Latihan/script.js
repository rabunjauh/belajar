// // ambil semua elemen video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // pilih hanya yang 'JAVASCRIPT LANJUTAN'
// let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// // ambil durasi masing2 video
//     .map(item => item.dataset.duration)
// // ubah durasi menjadi float, ubah menit menjadi detik
//     .map(duration => {
//         const parts = duration.split(':').map(part => parseFloat(part));
//         return (parts[0] * 60) + parts[1];
//     })
// // jumlah semua detik
//     .reduce((total, second) => total + second);
// // ubah formatnya jadi jam menit detik
// const hour = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - hour * 3600;
// const minute = Math.floor(jsLanjut / 60);
// const second = jsLanjut - minute * 60;
// // simpan di DOM
// const totalDuration = document.querySelector('.total-durasi');
// const totalVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const totalVideoElement = document.querySelector('.jumlah-video');
// totalDuration.textContent = `${hour} Jam, ${minute} Menit, ${second} Detik`;
// totalVideoElement.textContent = `${totalVideo} Video`;

// function user1()
// {
//     return {
//         name: "Juan"
//     };
// }

// function user2()
// {
//     return 
//         {
//         name: "Juan"
//     };
// }

// console.log(user1());
// console.log(user2());

// function user1()
// {
// 	return {
// 		name: "Juan"
// 	};
// }
// function user2()
// {
// 	return
// 	{
// 		name: "Juan"
// 	};
// }
// console.log(user1());
// console.log(user2());