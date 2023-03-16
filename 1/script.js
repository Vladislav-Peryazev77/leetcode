'use strict';
let nums = [2,7,11,15];
let target = 9;
// let nums = [3, 2, 4];
// let target = 6;
// let nums = [3, 3];


function func(nums) {
	let arr = [];
	let result = [];
	for ( let i = 0; i < nums.length; i++) {
		for ( let k = 0; k < nums.length; k++) {
			arr.push(nums[k]);
			if(i != k) {
				if (nums[i] + arr[k] == target) {
					result.push(i, k);
					return result;
				}
			}
		}
	}
}
console.log(func(nums));