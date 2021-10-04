/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let target = 6
let nums = [3, 3]
let result = []

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + nums[i + 1] == target) {
			console.log(nums[i], nums[i + 1])
			let a = nums[i]
			let b = nums[i + 1]
			console.log(`Final is ${a}, ${b}`)

			if (a == b) {
				console.log(nums.indexOf(a), nums.lastIndexOf(b))
			} else {
				console.log(`Not same: ${nums.indexOf(a)}, ${nums.indexOf(b)}`)
			}
			return [nums.indexOf(a), nums.indexOf(b)]
		} else {
			console.log('Error')
			return null
		}
	}
}
twoSum(nums, target)
