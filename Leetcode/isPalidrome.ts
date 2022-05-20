const isPalindrome = (x: number): boolean => {
	if (!x) return false
	const reversed = Number(x.toString().split("").reverse().join(""))
	if (reversed === x) return true
	return false
}

console.log(isPalindrome(1234321))
