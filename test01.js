// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

strs = ['flower', 'flow', 'flight'];
var longestCommonPrefix = function (strs) {
	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
		}
	}
	return prefix;
};
console.log(longestCommonPrefix(strs));

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
const longestCommonPr = function (arr) {
	let longestPr = '';

	if (arr == null || arr.length == 0) {
		return longestPr;
	}

	let minLength = arr[0].length;

	for (let i = 1; i < arr.length; i++) {
		minLength = Math.min(minLength, arr[i].length);
	}
	// console.log(minLength)
	for (let i = 0; i < minLength; i++) {
		let current = arr[0][1];

		//
		for (let j = 0; j < arr.length; j++) {
			if (arr[j][i] != current) {
				return longestPr;
			}
		}
		longestPr += current;
	}
	return longestPr;
};

const someArr = ['dog', 'racecar', 'car'];
console.log(longestCommonPr(someArr));

// Constraints:
// * 1 <= strs.length <= 200
// * 0 <= strs[i].length <= 200
// * strs[i] consists of only lower-case English letters.
