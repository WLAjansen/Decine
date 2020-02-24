$(document).ready(() => {
 getMovies();
});

function getMovies(){
axios.get('http://www.omdbapi.com/?t=joker&apikey=efadb3ce')
.then((response) => {
    console.log(response);
    let movies = response.data;
    let output = '';
    $.each(movies, (index, movie) => {

        output += `
        
        <div class="movie-text">
        <img src="${movie.Poster}">
        <h5>${movie.Title}</h5>
        <a onclick="movieSelected('$(movie.imdbID')" class="button" href=""></a>
        </div>
        `;
    });
    $('#movies').html(output);
})
.catch((err) => {
    console.log(err);
});

}