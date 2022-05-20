const isPalindrome = (x: number): boolean => {
	if (!x.toString().match(/^[0-9]*$/)) return false
	const reversed = Number(x.toString().split("").reverse().join(""))
	if (reversed === x) return true
	return false
}
