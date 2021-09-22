/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) 
{
    console.log(nums1.length);
    if(n==0)
    {
        
    }
    else
    {
        let j=0;
        for (var i=0;i<(m+n);i++)
        {
            if(nums1[i]==0 &&j<n)
            {
                nums1[i]=nums2[j];
                j++;
            }
        }
        nums1.sort(function(a,b)
        { 
            return a - b
        })
        
    }
    
    
    
    
};