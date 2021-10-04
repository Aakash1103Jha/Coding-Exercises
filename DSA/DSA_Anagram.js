const isAnagram = (first, second) => {
	if (first.length !== second.length) {
		return false
	}
	let firstArr = []
	let secondArr = []

	for (i in first) {
		firstArr = firstArr.push(i)
	}
	console.log(firstArr)
}

isAnagram("hi", "ih")
