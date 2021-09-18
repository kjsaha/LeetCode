/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) 
{
    //Create an hash map for ranking each letter
    let dict ={};
    for (let i = 0; i<order.length;i++)
    {
        dict[order[i]]=i;
    }
    //Now iterate over the words array and compare adjacent words
    for(let i = 0;i<words.length-1;i++)
    {
        let word1=words[i];
        let word2=words[i+1];
        for (let j=0;j<word1.length;j++)
        {
            if((dict[word1[j]]>dict[word2[j]])||j===word2.length)
            {
                return false;
            }
            if(dict[word1[j]]<dict[word2[j]])
            {
                break;
            }
        }
        
    }
    return true;
};