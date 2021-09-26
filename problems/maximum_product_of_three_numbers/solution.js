/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) 
{
    nums.sort((a,b)=>a-b);
    var product = 1;
    if(nums.length==3)
    {
        return nums[0]*nums[1]*nums[2];
        
    }
    if(nums[0]*nums[1]*nums[nums.length-1]>nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
    {
        return nums[0]*nums[1]*nums[nums.length-1]
    }
    else
    {
        return nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]
    }
};