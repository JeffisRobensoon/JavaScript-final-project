function displayMovies(movies) {
  const movieResults = movies.map((movie) => {
    const poster = movie.Poster !== 'N/A' ? movie.Poster : '';

    return `
    <div class="movie-card">
          <img class="movie-card__img" src="https://m.media-amazon.com/images/M/MV5BZTA4ZmZlZWQtZDRlYS00ZWZhLTk0MzEtYjExMGIzMTBlZDNlXkEyXkFqcGc@._V1_SX300.jpg" alt="">
          <h2 class="movie-card__title">The Avengers</h2>
          <p class="movie-card__year">1998</p>
        </div>
        `;
  }).join('');
}