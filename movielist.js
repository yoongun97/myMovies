import apikey from "./apikey.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: apikey.aut,
  },
};

function MovieListing() {
  fetch(apikey.apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const movieArea = document.getElementById("cards-box");

      // 카드 클릭 이벤트
      movieArea.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        if (card) {
          const id = card.id;
          showId(id);
        }
      });

      let html = ""; // HTML 템플릿 문자열 초기화

      const movInput = document.getElementById("movInput").value; // input 속성 받아오기

      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(movInput.toLowerCase());
      }); // 받아온 data filtering하기

      filteredMovies.forEach((movie) => {
        html += `
                                  <div class="card" id="${movie.id}">  
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

MovieListing();

// window load 시 검색창 고정
window.addEventListener("load", function () {
  const searchInput = document.getElementById("movInput");
  searchInput.focus();
});

// Enter key 기능
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    MovieListing();
  }
});

// 검색 버튼 이벤트
searchButton.addEventListener("click", () => {
  MovieListing();
});

// id 보여주는 이벤트
function showId(id) {
  alert("영화 id: " + id);
}

const search = () => {};
