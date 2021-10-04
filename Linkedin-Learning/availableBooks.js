/*  Availability criteria:
        if numCopies < 10 -> low stock
        if numCopies === 0 -> out of stock
        else in stock
    
    Sell book:
        sell(numSold) { return totalBooks - numSold }
        if numSold === null -> default numSold === 1

    Restock:
        restock(numCopies) { return totalBooks + numCopies }
        if numCopies === null -> default numCopies === 5

*/

class Book {
	constructor(title, author, isbn, numCopies) {
		this.title = title
		this.author = author
		this.isbn = isbn
		this.numCopies = numCopies
	}

	onSale(num = 1) {
		return this.numCopies - num
	}

	isAvailable() {
		if (this.numCopies === 0) {
			return "Out of stock"
		} else if (this.numCopies < 10) {
			return "Low stock"
		} else {
			return "In stock"
		}
	}

	onRestock(num = 5) {
		return this.numCopies + num
	}

	get Availability() {
		return this.isAvailable()
	}
}

const book = new Book("Harry Potter", "J.K. Rowling", Math.floor(Math.random() * 100000), 20)
// const isAvailable = book.Availability
// const onRestock = book.onRestock(5)
// const onSale = book.onSale()

/*
	--------------------------- Inheritance --------------------------- 
*/
class TechnicalBooks extends Book {
	constructor(title, author, isbn, numCopies, edition) {
		super(title, author, isbn, numCopies)
		this.edition = edition
	}

	getEdition() {
		return `The current version of this book is ${this.edition}`
	}
}

const dme = new TechnicalBooks("Design of Machine Elements", "McGrawHill", 234561234567, 8, 3)

const isAvailable = dme.Availability
const onRestock = dme.onRestock(5)
const onSale = dme.onSale()
const edition = dme.getEdition()

console.log(dme)

console.log({
	isAvailable: isAvailable,
	onRestock: onRestock,
	onSale: onSale,
	edition: edition,
})
