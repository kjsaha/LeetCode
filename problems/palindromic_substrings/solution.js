var countSubstrings = function(s) {
//     let count = 0;
    
//     const bubbleFromCenter = (left, right) => {
//         while(left >= 0 && right < s.length && s[left] === s[right]) {
//             count++; left--; right++;
//         }
//     }
    
//     for(let i = 0; i < s.length; i++) {
//         bubbleFromCenter(i, i);
//         bubbleFromCenter(i, i+1);
//     }
//     return count;
     let count = s.length;  //or s.length if you chose to count single letters as palindrome
    let subString;

    for (let i = 1; i < s.length; i++) {
      for(let j = 0; j < s.length - i; j++) {
        subString = s.substring(j, j+i+1);
        if(subString === subString.split('').reverse().join('')) {
            count += 1;
        }
      }
    }
    return count;
};