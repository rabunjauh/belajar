// Jquery AJAX
// $('.search-button').on('click', function() {

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=4d0132d0&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(movie => {
//                 cards += showCards(movie);
//             });
            
//             $('.movie-container').html(cards);
    
//             // etika tombol dtail di klik
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=4d0132d0&i=' + $(this).data('imdbid'),
//                     success: movieDetail => {
//                         const movieDetailContent = showMovieDetail(movieDetail);
//                     $('.modal-body').html(movieDetailContent);                                
//                     },
//                     error: (e) => {
//                         $('.modal-body').html(e.responseText);
//                         console.log(e);
//                     }
//                 }) 
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });

// })



//Fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=4d0132d0&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(movie => {
                cards += showCards(movie);
                const movieContainer = document.querySelector('.movie-container');
                movieContainer.innerHTML = cards;
                
                const modalDetailButton = document.querySelectorAll('.modal-detail-button');
                modalDetailButton.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const imdbid = this.dataset.imdbid;
                        fetch('http://www.omdbapi.com/?apikey=4d0132d0&i=' + imdbid)
                            .then(response => response.json())
                            .then(movieDetail => {
                                // bisa buat variable baru terlebih dahulu
                                const movieDetailContent = showMovieDetail(movieDetail);
                                const modalBody = document.querySelector('.modal-body');
                                modalBody.innerHTML = movieDetailContent;
                                // atau langsung bungkus function showMovieFunction kedalam modalBody.innerHTML
                                // modalBody.innerHTML = showMovieDetail(movieDetail);
                            });
                    });
                });
            })
        });
});



function showCards(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(movieDetail) {
    return `<div class="row">
                <div class="col-md-3">
                    <img src="${movieDetail.Poster}" alt="" class="img-fluid">
                </div>

                <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${movieDetail.Title} (${movieDetail.Year})</h4></li>
                    <li class="list-group-item"><strong>Director: ${movieDetail.Director}</strong></li>
                    <li class="list-group-item"><strong>Actor: ${movieDetail.Actors}</strong></li>
                    <li class="list-group-item"><strong>Writer: ${movieDetail.Writer}</strong></li>
                    <li class="list-group-item"><strong>Plot:</strong> <br> ${movieDetail.Plot}</li>
                    </ul>
                </div>
            </div>`;
}