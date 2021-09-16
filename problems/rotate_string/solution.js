/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// var rotateString = function(s, goal) 
// {
//     if(s==goal) return true;
    
//     for(var i=0;i<s.length;i++)
//     {
//         s=s.substring(1,s.length)+s.substring(0,1);
//         if(s==goal)
//         {
//             return true;
//         }
//     }
//     return false;
    
// };
// var rotateString = function(s, goal) {
//     if(s.length !== goal.length) {
//         return false;
//     }
    
//     let doubleS = s + s;
//     for(let i = 0; i < doubleS.length; i += 1) {
//         let count = 0;
//         let index = i;
//         for(let j = 0; j < goal.length; j += 1) {
//             if(doubleS[index++] !== goal[j]) {
//                 break;
//             } else {
//                 count += 1;
//             }
//             if(count === goal.length) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };
var rotateString = function (A, B) {
  if (A === B) return true ;

  for (let char of A) {
    A = A.slice(1) + A.slice(0, 1);   //rotating the string 
    if (A === B) return true;
  }

  return false;
};