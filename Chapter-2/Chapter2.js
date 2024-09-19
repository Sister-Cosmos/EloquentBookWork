/* LOOPING A TRIANGLE */

for (let i = '#'; i.length < 8; i+= "#") {
    console.log(i)
}


/*FIZZ BUZZ*/


const fizzBuzz =() => {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz") 
        } else {
            console.log (i)
        }
    }
}
console.log(fizzBuzz());


/* CHESS */

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);