/**
 * @param {string} s
 * @return {number}
 */


// create an hashmap/dict to store the counter of each charecter done
// also create another hashmap of storing the index of the charecter when you  // first encounter it done
//then check the key of the hashmap which has a value of 1
//pass it to the second hashmap to retrieve the index
var firstUniqChar = function(s) 
{
    var map1= new Map();
    //var map2 = new Map();
    map1.set(s[0],1);
    //map2.set(s[0],0);
    
    for (var i=1;i<s.length;i++)
    {
        if(map1.has(s[i]))
        {
            map1.set(s[i],(map1.get(s[i])+1))
            
        }
        else
        {
            map1.set(s[i],1);
            //map2.set(s[i],i);
        }
    }
    for(var i=0;i<s.length;i++)
    {
        if(map1.get(s[i])==1) return i;
        
    }
    return -1;
    
//     var unique;
    
//     for (var [index,key, value] of map1) 
//     {
//         if (value == 1)
//         {
//             unique=key;
//             break;
//         }
//     }
    // if(unique==undefined) return -1;
    // else return map2.get(unique);
};
    