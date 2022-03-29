var twoSum = function(nums, target) {
    const storage = {};
    
    for(let [i, num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num], i];
        storage[target-num] = i;
    }
};