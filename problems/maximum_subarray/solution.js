/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) 
{
    if (nums.length==1) return nums[0];
    let max =nums[0];
    for(var i=0;i<nums.length;i++)
    {
        var sum=nums[i];
        
        for(var j =i+1;j<nums.length;j++)
        {
            
            if(sum>max)
            {
                max =sum;
            }
            sum+=nums[j];
        }
        if(sum>max)
        {
            max=sum;
        }
    }
    
    //console.log(max)
    return max;
};