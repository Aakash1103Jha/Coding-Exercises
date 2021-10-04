function Movie(title, director, genre, releaseYear, rating) {
	this.title = title
	this.director = director
	this.genre = genre
	this.releaseYear = releaseYear
	this.rating = rating
}

Movie.prototype.getOverview = function () {
	return `${this.title} was directed by ${this.director}, released in ${this.year} and was rated with ${this.rating} stars`
}

const movie = new Movie("Harry Potter", "Not JK Rowling", "Fiction", 2015, 4.5)

console.log(movie.getOverview())
// console.log(movie)
