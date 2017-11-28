const endPointByName = 'https://api.themoviedb.org/3/search/movie?',
    endPointPopular = 'https://api.themoviedb.org/3/movie/popular?',
    endPointLatest = 'https://api.themoviedb.org/3/movie/latest?',
    endPointTopRated = 'https://api.themoviedb.org/3/movie/top_rated?',
    apiKey = 'api_key=f24a0fd18f52218851075901c5a108a0',
    movieSearchForm = document.querySelector('#movie-search'),
    movieName = document.querySelector('#movie-search__name'),
    gallery = document.querySelector('.movie-gallery'),
    popularButton = document.querySelector('.category__popular'),
    latestButton = document.querySelector('.category__latest'),
    topRatedButton = document.querySelector('.category__top-rated');

const renderMovieItem = (parrent, rateText, posterSrc, movieNameText, descriptionText, releaseText) => {
    let templateString =
        `<div class="movie-card">
            <p class="movie-card__rate">Rating: ${rateText}</p>
            <img class="movie-card__poster" src="https://image.tmdb.org/t/p/w500/${posterSrc}">
            <p class="movie-card__name">${movieNameText}</p>
            <p class="movie-card__description">${descriptionText.slice(0, 99)}...</p>
            <p class="movie-card__release">Release: ${releaseText}</p>
        </div>`;
    parrent.innerHTML += templateString;
}

const fetchMovieList = (endPoint, page = '', query = '') => {
    let apiUrl = `${endPoint}${apiKey}${page}${query}`;
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
            if (data.results !== undefined) {
                const movies = data.results;
                movies.forEach(item => renderMovieItem(gallery, item.vote_average, item.poster_path, item.title, item.overview, item.release_date));
            } else {
                renderMovieItem(gallery, data.vote_average, data.poster_path, data.title, data.overview, data.release_date);
            }
        })
        .catch(err => alert(err));
};

const clearMoiveList = () => {
    document.querySelector('.movie-gallery').innerHTML = '';
}

movieSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let query = `&query=${movieName.value.trim().split(' ').join('+')}`;

    clearMoiveList();
    fetchMovieList(endPointByName, '', query);
    movieName.value = '';
});

popularButton.addEventListener('click', (e) => {
    clearMoiveList();
    fetchMovieList(endPointPopular, '&page=1');
});
latestButton.addEventListener('click', (e) => {
    clearMoiveList();
    fetchMovieList(endPointLatest, '&page=1');
});
topRatedButton.addEventListener('click', (e) => {
    clearMoiveList();
    fetchMovieList(endPointTopRated, '&page=1');
});
