//Hi, I misunderstood the assignment! here are the Exercises!


/* MINIMUM */
const Min =(x,y) => {
    if (x < y) return x;
    else return y;
}

console.log(Min(-10,4));

/* Recursion */
 isEven = function(x) {
    if (x==0) return true;
    else if (x==1) return false;
    else if (x < 0) return isEven(-x);
    else return isEven(x-2);
}
console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-2));

/* BEAN COUNTING */
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  
  console.log(countChar("kakkerlak", "k"));
  