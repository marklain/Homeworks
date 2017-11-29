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
    topRatedButton = document.querySelector('.category__top-rated'),
    movieCardTemplate = document.querySelector('#movie-card-template').textContent.trim(),
    lightThemeBtn = document.querySelector('.theme-choose__light'),
    darkThemeBtn = document.querySelector('.theme-choose__dark');

const renderMovieItems = (parrent, template, items) => {
    let htmlString = '';

    items.forEach((item) => {
        htmlString += template(item);
    });

    parrent.innerHTML += htmlString;
}
const formateMovie = data => data.map((item) => {
    return {
        rate: item.vote_average,
        posterSrc: item.poster_path,
        title: item.title,
        description: `${item.overview.slice(0, 99)}...`,
        releaseDate: item.release_date
    };
});

const complied = _.template(movieCardTemplate);

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
                const movies = formateMovie(data.results);
                renderMovieItems(gallery, complied, movies);

            } else {
                const movie = [{
                    rate: data.vote_average,
                    posterSrc: data.poster_path,
                    title: data.title,
                    description: `${data.overview.slice(0, 99)}...`,
                    releaseDate: data.release_date
                }];
                renderMovieItems(gallery, complied, movie)
            }
        })
        .catch(err => alert(err));
};

const clearMoiveList = () => {
    document.querySelector('.movie-gallery').innerHTML = '';
}

const themeChooser = (theme) => {
    let styleHref = document.querySelector('link');
    styleHref.setAttribute('href', `style-${theme}-theme.css`);
    if (theme == 'light') {
        localStorage.setItem('theme', 'light');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
    } else {
        localStorage.setItem('theme', 'dark');
        lightThemeBtn.classList.remove('active');
        darkThemeBtn.classList.add('active');
    }
}

window.addEventListener('load',(e) => {
    if (localStorage.getItem('theme') === null) themeChooser('light');
    themeChooser(localStorage.getItem('theme'));
});

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
lightThemeBtn.addEventListener('click',(e) => {
    themeChooser('light');
});
darkThemeBtn.addEventListener('click',(e) => {
    themeChooser('dark');
});
