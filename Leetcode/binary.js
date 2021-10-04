// Function to convert positive integer to 8-bit binary.
function toBinary() {
	var num = 20
	let rem = []
	for (let i = 0; i < 10; i++) {
		// find remainder for num and store in array rem
		rem.push(num % 2)
		// find quotient for num and use it for next iteration
		// Math.floor to round float value to lower int value
		num = Math.floor(num / 2)
	}
	// print the final array in reverse order to get the final binary notation.
	console.log(rem.reverse(rem))
	new_ = rem
	let final = new_.slice(new_.indexOf(1))
	console.log(`Binary conversion is: ${final}`)
}

toBinary()
