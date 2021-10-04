const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		console.log(`Length of both arrays do not match`)
		return false
	}
	let Obj1 = {}
	let Obj2 = {}

	for (let i of arr1) {
		Obj1[i] = (Obj1[i] || 0) + 1
	}
	for (let i of arr2) {
		Obj2[i] = (Obj2[i] || 0) + 1
	}
	console.log(Obj1)
	console.log(Obj2)

	for (let key in Obj1) {
		console.log(`Key: ${key}`)
		if (!(key ** 2 in Obj2)) {
			return false
		}
		if (Obj2[key ** 2] !== Obj1[key]) {
			return false
		}
	}
	return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25])
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))
