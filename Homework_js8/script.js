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
    let div = document.createElement('div'),
        rate = document.createElement('p'),
        poster = document.createElement('img'),
        movieName = document.createElement('p');
    description = document.createElement('p'),
        release = document.createElement('p');
    div.className = 'movie-card';
    rate.className = 'movie-card__rate';
    rate.innerHTML = `Rating: ${rateText}`;

    poster.className = 'movie-card__poster';
    poster.src = `https://image.tmdb.org/t/p/w500/${posterSrc}`;

    movieName.innerHTML = movieNameText;
    movieName.className = 'movie-card__name'

    description.className = 'movie-card__description';
    description.innerHTML = `${descriptionText.slice(0, 99)}...`;

    release.className = 'movie-card__release';
    release.innerHTML = `Release: ${releaseText}`;

    div.appendChild(rate);
    div.appendChild(poster);
    div.appendChild(movieName)
    div.appendChild(description);
    div.appendChild(release);
    parrent.appendChild(div);
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
            if (data.results != undefined) {
                const movies = data.results;
                movies.forEach(item => renderMovieItem(gallery, item.vote_average, item.poster_path, item.title, item.overview, item.release_date));
            } else {
                renderMovieItem(gallery, data.vote_average, data.poster_path, data.title, data.overview, data.release_date);
            }
        })
        .catch(err => alert(err));
};

const clearMoiveList = () => {
    document.querySelectorAll('.movie-card').forEach((elem) => {
        elem.remove();
    });

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
