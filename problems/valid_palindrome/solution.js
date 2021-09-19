/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) 
{
    s=s.toLowerCase();
    var regex = /[a-z0-9]/g;
    var sentence = s.match(regex);
    if(sentence==null) return true;
    var leftNode=0;
    var rightNode= sentence.length-1;
    while(leftNode<=rightNode)
    {
        if(sentence[leftNode]!=sentence[rightNode])
        {
            return false
        }
        leftNode++;
        rightNode--;
    }
    return true;
    
};