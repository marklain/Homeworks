const endPoint = 'https://api.themoviedb.org/3/search/movie?';
const apiKey = 'api_key=f24a0fd18f52218851075901c5a108a0';
const movieSearchForm = document.querySelector('#movie-search');
const movieName = document.querySelector('#movie-search__name');
const gallery = document.querySelector('.movie-gallery');
let info = [];

const renderMovieItem = (parrent, rateText, posterSrc, movieNameText, descriptionText, releaseText) => {
    let div =         document.createElement('div'),
        rate =        document.createElement('p'),
        poster =      document.createElement('img'),
        movieName =   document.createElement('p');
        description = document.createElement('p'),
        release =     document.createElement('p');
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

const fetchMovieList = (input) => {
    let apiUrl = `${endPoint}${apiKey}&query=${input.value.trim().split(' ').join('+')}`;
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
            const movies = data.results;
            movies.forEach(item => renderMovieItem(gallery, item.vote_average, item.poster_path, item.title, item.overview, item.release_date))
        })
        .catch(err => console.log(err));
};

const clearMoiveList = () => {
    document.querySelectorAll('.movie-card').forEach((elem) => {
        elem.remove();
    });

}

movieSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    clearMoiveList();
    fetchMovieList(movieName);
    movieName.value = '';
});
