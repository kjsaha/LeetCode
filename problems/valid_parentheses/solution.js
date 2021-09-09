/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 
    let stack = [];
    for (var i=0;i<s.length;i++)
    {
        if(s[i]=='(')
        {
            stack.push(')');
        }
        else if(s[i]=='{')
        {
            stack.push('}');
        }
        else if(s[i]=='[')
        {
            stack.push(']');
        }
        else if(s[i]!=stack.pop())
        {
            return false;
        }
    }
    if(stack.length>0)
    {
        return false
    }
    else
    {
        return true;
    }
    
   
    
};
//20
//1
//349
//387