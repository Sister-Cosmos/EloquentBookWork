let ListOfNumbers = [2, 3, 5, 7, 11];
//most datasets, expecially Arrays, arrange numbers as (0,1,2,3...) (rather than 1,2,3...)
console.log(ListOfNumbers[0]);
console.log(ListOfNumbers[3]);
console.log(ListOfNumbers[4]);

//things have properties, null/undifined tend to not have properties

let doh= "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence=[1, 2, 3];
sequence.push(4); /* .push adds values to the end of an array */
sequence.push(5);
console.log(sequence);
console.log(sequence.pop()); /* .pop removes the lastalue in an array */
console.log(sequence);
console.log(sequence.pop(2)); /* a value within the () of .pop doesn't seem to remove a chosen value */
console.log(sequence);



/* HOLLY $HIT IT'S OBJECTS YIPPPPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/
                                                                                                /* SQUIRREL TIME */
                                                                                          /* Thank god this is not python */

let day1 ={
    squirrel :false,
    events: ["work", "touched tree","pizza","running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
