const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"]



for(let i = 0; i < 4; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
  	break
}
	console.log(rapperArray[i])
}

console.log("And if you don't know, now you know.")


// output: Lil' Kim, Jay-Z, And if you don't know, now you know.
// Notice I put the if and break statement before console.log. This makes it so that once it reaches N. BIG, it does not log it to console b/c I thought we wanted to stop there. 


/* Codecademy's 3rd checkpoint instructions were:
'Add a 'break' inside your loop's block that breaks out of the loop if the element 
at the current index in the rapperArray is 'Notorious B.I.G.'
Their suggested correct code:

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

Expected output on console: Lil' Kim
Jay-Z
Notorious B.I.G.
And if you don't know, now you

Their code had console.log(rapperArray[i]) before the if and break statement which
made is so Notorious BIG was included in console list before the code stopped. Insturctions
were unclear, made it sound like to stop at Notorious BIG and not have that included in the console. 

Other issues. 
Their first checkpoint instructions:
'Log each element from rapperArray in a for loop with the iterator variable rapperArrayIndex'
For some reason they wanted to use rapperArrayIndex as the iterator variable. 
In the intro, it was explained that the iterator variable 'i' was conventionally used
in for loops. Strange they wanted the uncessarily confusing rapperArrayIndex
as the iterator variable when we have a const array variable rapperArray. 
You could only pass first checkpoint if you used their rapperArrayIndex. 
But their final 3rd checkpoint code went back to using the iterator variable 'i'


*/

