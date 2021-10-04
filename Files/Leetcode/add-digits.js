/* 
    Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
    Example:
    Input: num = 38
    Output: 2
    Explanation: The process is
    38 --> 3 + 8 --> 11
    11 --> 1 + 1 --> 2
    Since 2 has only one digit, return it. 
*/
var addDigits = function (num) {
	var value = num,
		sum = value
			.toString()
			.split('')
			.map(Number)
			.reduce(function (a, b) {
				c = a + b
				console.log(c)
				return c
			}, 0)
	if (c >= 10) {
		value = c
		sum = value
			.toString()
			.split('')
			.map(Number)
			.reduce(function (a, b) {
				c = a + b
				return c
			}, 0)
	} else {
		return sum
	}
	console.log(sum)
	// return sum
}

addDigits(199)
