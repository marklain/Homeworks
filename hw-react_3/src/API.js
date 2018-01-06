export function fetchData(url) {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Error while fetching: ' + response.statusText);
    })
    .then(data => {
        const movies = data.results.map(movie =>({
            id: movie.id,
            title: movie.title,
            img: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            descr: `${movie.overview.slice(0, 99)}...`,
            releaseDate: movie.release_date.slice(0, 4),
            rating: movie.vote_average
        }));

        return movies;
    })
    .catch(err => console.error(err));
};

export function addActiveClassToLink(selector) {
    const NavLinks = document.querySelectorAll(`.${selector}`);
    NavLinks.forEach(link => {
        link.addEventListener('click', e => {
            NavLinks.forEach(link => {
                link.classList.remove(`${selector}--active`);
            })
            link.classList.add(`${selector}--active`);
        });
    })
}
