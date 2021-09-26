/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) 
{
    var map = new Map();
    var compliment;
    for(var i = 0;i<numbers.length;i++)
    {
        compliment = target-numbers[i];
        if(map.has(compliment))
        {
            return [map.get(compliment),i+1]
        }
        else
        {
            map.set(numbers[i],i+1);
        }
    }
    
};