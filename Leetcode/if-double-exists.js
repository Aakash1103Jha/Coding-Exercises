/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {}

let num = [10, 2, 5, 3]
let multiply = []
let new_nums = num.forEach((element) => {
	multiply.push(element * 2)
})
console.log(multiply)

for (i = 0; i < num.length; i++) {
	if (num[i] === num[i + 1] * 2) {
		console.log(true)
	} else {
		console.log(false)
	}
}
