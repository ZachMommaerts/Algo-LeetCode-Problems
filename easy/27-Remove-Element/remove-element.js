const removeElement = (nums, val) => {
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === val) {
            nums[i] = '_';
        }
    }

    const filtered = nums.filter(element => element !== '_')
    return filtered
}

console.log(removeElement([3,2,2,3], 3))