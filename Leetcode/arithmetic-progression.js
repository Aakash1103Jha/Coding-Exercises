/**
 * @param {arrber[]} arr
 * @return {boolean}
 */
let arr = [1, 10, 10, 10, 19]

var canMakeArithmeticProgression = function (arr) {
	if (arr.length > 1) {
		arr = arr.sort((a, b) => a - b)

		let unique = []
		arr.forEach((num) => {
			if (!unique.includes(num)) {
				unique.push(num)
			}
		})
		console.log(unique)
		arr = unique
		let l
		let a = arr[0],
			n = arr.length,
			d = arr[1] - arr[0]
		if (n == 1) {
			l = a
			console.log('l = 0')
			return true
		} else {
			l = a + (n - 1) * d
			if (l === arr[arr.length - 1] || l === 0 || l === NaN) {
				console.log('true')
				return true
			} else {
				console.log('false')
				return false
			}
		}
		// console.log(l)
	}
}
canMakeArithmeticProgression(arr)
