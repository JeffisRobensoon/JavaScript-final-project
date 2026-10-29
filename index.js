const API_KEY = '9bcddd94'

const searchForm = document.querySelector('#searchForm')
const searchInput = document.querySelector('#searchInput')
const moviesGrid = document.querySelector('#moviesGrid')
const resultsInfo = document.querySelector('#resultsInfo')
const sortSelect = document.querySelector('#sortSelect')

let currentMovies = [];


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.ariaValueMax.trim();
  if (searchTerm) {
    fetchMovies(searchTerm);
  }
});

function showSkeletons() {
  const skeletons = Array(10).fill(0).map(() => 
  `<div class="movie-card movie-card--skeleton">
  <div class="movie-card__img movie-card__img--skeleton></div>
  <div class=movie-card__title movie-card__title--skeleton"></div>
  <div class="movie-card__year movie-card__year--skeleton"></div>
  </div>
  `).join('');

  moviesGrid.innerHTML = skeletons;
}

async function fetchMovies(searchTerm) {
  showSkeletons();

  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
  const data = await res.json();

  if (data.Response === 'True') {
    currentMovies = data.search;
    resultsInfo.textContent = `Showing: ${searchTerm}`;
    sortSelect.value = 'default';
    displayMovies(currentMovies);
  }
  else {
    resultsInfo.textContent = `Showing: ${searchTerm}`;
    moviesGrid.innerHTML = '<p>No movies found.</p>';
    currentMovies = [];
  }
}
// function displayMovies(movies) {
//   const movieResults = movies.map((movie) => {
//     const poster = movie.Poster !== 'N/A' ? movie.Poster : '';

//     return `
//     <div class="movie-card">
//           <img class="movie-card__img" src="https://m.media-amazon.com/images/M/MV5BZTA4ZmZlZWQtZDRlYS00ZWZhLTk0MzEtYjExMGIzMTBlZDNlXkEyXkFqcGc@._V1_SX300.jpg" alt="">
//           <h2 class="movie-card__title">The Avengers</h2>
//           <p class="movie-card__year">1998</p>
//         </div>
//         `;
//   }).join('');
// }

