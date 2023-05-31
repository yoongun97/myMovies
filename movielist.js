const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU0ZmQ2OTExMjk4YTk1MGI3ODhlNjk0ODVkZjZmZiIsInN1YiI6IjY0NzU4M2Y1Njc0M2ZhMDExOTdhNzA1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.exgR1edP5kPFmM8OjkVJfy8DoRlmQMJV4bQ_Msz6pBc",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  // .then((response) => console.log(response))
  .then((data) => {
    const movies = data.results; // 영화 목록 추출

    const movieArea = document.getElementById("cards-box"); // 영화를 추가할 HTML 영역 선택

    let html = ""; // HTML 템플릿 문자열 초기화

    movies.forEach((movie) => {
      html += `
                <div class="card">
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
    console.log(html);

    movieArea.innerHTML = html; // HTML 영역에 템플릿 문자열 삽입
  })
  .catch((err) => console.error(err));

function search() {}
