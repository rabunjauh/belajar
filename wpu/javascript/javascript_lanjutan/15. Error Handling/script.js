// Error Handling: Promise
// .then()
// .catch()


// Error Handling: Async Await
// try
// catch()

// Error Handling: Fetch


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        // const tes = document.createElement = '<p>tes</p>';
        // tesContent(tes);
        updateUI(movies);
    } catch(error) {
        errorContent(error);
    }
});

function errorContent(error) {
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = error;
}

function getMovies(keyword) {
    // problem error handling menggunakan fetch: yg ditangkap oleh fetch hanya error yangterjadi pada networknya / url nya saja
    return fetch('http://www.omdbapi.com/?apikey=4d0132d0&s=' + keyword)
            .then(response => {
                // console.log(response);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                // console.log(response);
                if (response.Response === "False") {
                    throw new Error(response.Error);
                }
                return response.Search;
            });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => {
        cards += showCards(movie);
    }); 

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// function updateUI(movies) {
//     setTimeout(() => {
//             let cards = '';
//             movies.forEach(movie => {
//                 cards += showCards(movie);
//             }); 
        
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;
//         }, 6000);
//     }

// function tesContent(tes) {
//     const movieContainer = document.querySelector('.movie-container');
//     movieContainer.innerHTML = tes;
// }

// Event Binding
// kasih event ke element yang awalnya belum ada tapi ketika dia ada event nya tetap bisa berjalan
// simpan event handler nya kedalam element document 
document.addEventListener('click', async function(e) {
    try {
        if (e.target.classList.contains('modal-detail-button')) {
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        }
    } catch (detailError) {
        console.log(detailError);
        errorContentDetail(detailError);
    }
});

function errorContentDetail(detailError) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = detailError;
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=4d0132d0&i=' + imdbid)
        .then(response => {
            // console.log(response);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(movieDetail => {
            // console.log(movieDetail);
            if (movieDetail.Response === "False") {
                // console.log(response);
                throw new Error(movieDetail.Error);
            }
            return movieDetail;
        });                                
}


function updateUIDetail(movieDetail) {
    const movieDetailContent = showMovieDetail(movieDetail);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetailContent;
}


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