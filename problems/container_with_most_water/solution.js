/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var left = 0;
    var right = height.length-1;
    while(left<=right)
    {
        var smallest = Math.min(height[left],height[right]);
        var area = smallest * (right-left)
        if(area>max)
        {
            max =area;            
        }
        if(height[right]>height[left])
        {
            left++;            
        }
        else
        {
            right --;            
        }
        
    }
    console.log(max)
    return max;
};