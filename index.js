

const newMovies = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
]

let output = []
let movies =[]
//local storage
localStorage.setItem('listOfMovies',JSON.stringify(newMovies));
movies = JSON.parse(localStorage.getItem('listOfMovies'))
//Next process
document.getElementById('hey').style.display = 'none'

document.getElementById("search").addEventListener('click', (e) => {
    let title = document.getElementById("title").value
    let genre = document.getElementById("genre").value
    document.getElementById('message').innerHTML = ""
    if(title && genre){
        output = sortByBoth(title,genre);
    }
    else if (title) {
        output = searchByTitle(title)
    }
    else if (genre) {
        output = searchByGenre(genre)
    }
    else {
        document.getElementById('h1').innerHTML = ""
        document.getElementById('italic').innerHTML = ""
        document.getElementById('message').innerHTML = "Enter the input to search for movies"
    }
    displayResults(output)
})
function searchByTitle(titles) {

    return movies.filter(movie => movie.title.toLowerCase().includes(titles.toLowerCase().trim()))

}

function searchByGenre(genre) {
    return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase().trim()))
}

function displayResults(output) {
    document.getElementById('results').innerHTML = "";
    document.getElementById('count').innerHTML ="";
    output.map(res => {
        document.getElementById('results').innerHTML += `<li>${res.title}(${res.genre})</li>`
    })
    countByGenre(output)
    function countByGenre(count) {
        let obj = {}
        output.map(ele =>{
            obj[ele.genre] = (obj[ele.genre] | 0) + 1
        })
        for(key in obj){
            document.getElementById('count').innerHTML+= `<li>${key}: ${obj[key]},</li>`
        }
        
    }
}

function sortByTitle() {
    const sortedTitle = output.sort((a, b) => a.title.localeCompare(b.title));
    displayResults(sortedTitle)
}

function sortByGenre() {
    const sortedGenre = output.sort((a, b) => a.genre.localeCompare(b.genre));
    displayResults(sortedGenre)
}

function dropfunc(){
    let courses = document.getElementById('hey');
    if(courses.style.display == 'block') courses.style.display = "none";
    else courses.style.display = "block";
}
function sortByBoth(title,genre){
    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.genre.toLowerCase().includes(genre.toLowerCase().trim()));
}