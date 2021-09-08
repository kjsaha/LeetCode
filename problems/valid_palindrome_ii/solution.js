/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) 
{
    var i =0;
    var j= s.length-1;
    let check = true;
    while(i<=j)
    {
        if(s[i]!=s[j])
        {
            return(helperFunc(s,i+1,j)||helperFunc(s,i,j-1));
            
        }
        else
        {
            i++;
            j--;
        }
        
    }
    return true;
    
};

var helperFunc = function(s,i,j)
{
   while(i<=j)
    {
        if(s[i]!=s[j])
        {
            return false;
            
        }
        else
        {
            i++;
            j--
        }
        
        
    }
    return true;
}