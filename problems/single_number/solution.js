/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) 
{
    var map = new Map();
    //var unique =NaN;
    for(var i=0;i<nums.length;i++)
    {
        if(map.has(nums[i]))
        {
            // if(nums[i]==unique)
            // {
            //     unique =NaN;
            // }
            map.set(nums[i],map.get(nums[i])+1)
        }
        else
        {
            //unique = nums[i]
            map.set(nums[i],1);
        }
    }
   for(let [key, values] of map.entries()){
        if(values == 1) return key;
    }

    
};