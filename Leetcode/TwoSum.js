/** * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
	const dict = {}

	nums.forEach((item, index) => {
		dict[item] = index
	})
	for (let index = 0; index < nums.length; index++) {
		const complement = target - nums[index]

		if (dict[complement] !== undefined && dict[complement] !== index) {
			return [index, dict[complement]]
		}
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
