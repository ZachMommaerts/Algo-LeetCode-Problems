const removeDuplicates = (nums) => {
    let current;
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        current = nums[i];

        for (let j = 1; j < nums.length; j++) {
            if(nums[j] && current === nums[j]) {
                nums.splice(nums[j], 1)
            }
        }

        k++
    }
    return k
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))