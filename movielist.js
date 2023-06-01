const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU0ZmQ2OTExMjk4YTk1MGI3ODhlNjk0ODVkZjZmZiIsInN1YiI6IjY0NzU4M2Y1Njc0M2ZhMDExOTdhNzA1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.exgR1edP5kPFmM8OjkVJfy8DoRlmQMJV4bQ_Msz6pBc",
  },
};

function Moviefiltering() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    // .then((response) => console.log(response))
    .then((data) => {
      const movies = data.results; // 영화 목록 추출

      const movieArea = document.getElementById("cards-box"); // 영화를 추가할 HTML 영역 선택

      const movInput = document.getElementById("movInput").value; // input 속성 받아오기

      let html = ""; // HTML 템플릿 문자열 초기화

      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(movInput.toLowerCase());
      }); // 받아온 data filtering하기

      filteredMovies.forEach((movie) => {
        html += `
                                  <div class="card" onclick="showId(${movie.id})">
                                  <img
                                  src= "https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                                      class="card-img-top"
                                  />
                                  <div class="card-body">
                                  <h5 class="card-title">${movie.title}</h5>
                                      <p class="card-text">${movie.overview}</p>
                                      <p>rate : ${movie.vote_average}</p>
                                  </div>
                                  </div>
                              `; // HTML 템플릿에 카드 추가
      });

      movieArea.innerHTML = html; // HTML 영역에 템플릿 문자열 삽입
    })
    .catch((err) => console.error(err));
}

Moviefiltering();

function showId(id) {
  alert("영화 id: " + id);
} // 카드 선택 시 di 보여주기

window.addEventListener("load", function () {
  const searchInput = document.getElementById("movInput");
  searchInput.focus(); // window load 시 검색창 고정
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // 실행할 기능 작성
    Moviefiltering();
    // Enter key 기능
  }
});
