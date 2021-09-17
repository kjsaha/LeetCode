/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    x=String(x)
    var middle = Math.round(x.length/2)
    var right = x.length-1;
    for (var i =0;i<middle;i++)
    {
        if(x[i]!=x[right])
        {
            return false
        }
        right--
    }
    return true;
    
};