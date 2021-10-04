const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const getQuarter = (num) => {
	if (!numbers.includes(num)) {
		return `${num} is not in the array`
	}
	if (num === numbers[numbers.length - 1] || num === numbers[numbers.length - 2]) {
		return `${num} won't give you a response...`
	}

	const index = numbers.indexOf(num)
	const subArray = [numbers[index], numbers[index + 1], numbers[index + 2]]
	const result = subArray[subArray.length - 1]

	return result
}
const ans = getQuarter(13)

console.log(ans)
