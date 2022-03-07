/* 
 A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. 
 For instance, the numbers [1,3,4]  form a subsequence of the array [1,2,3,4] and so do [2,4].
 Note that a single number in an array and the array itself are both valid subsequences of the array. 
*/

const array = [5, 1, 22, 25, 7, -1, 8, 10]
const sequesnce = [1, 6, -1, 10]

function isValidSubsequence(array, sequence) {
	const ans = array.forEach((element) => {
		sequence.forEach((seq) => {
			if (seq === element) console.log(true)
		})
	})
}

const result = isValidSubsequence(array, sequesnce)
