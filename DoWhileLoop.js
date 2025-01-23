// do while loop is same like a while loop but it check the condition at the end of the loop.
// do while runs atleast one time even if the condition is false.
// do while is lest preferred than while loop and it used rarely.

// Syntax: do{//code to be executed } while(condition);

// Example:

let i = 0;

do {
  console.log(i); // 0
  i++;
} while (i > 10);

// Here while condition have (i > 10) i.e (0 > 10) which is false
// even if the condition is false as a result I am getting the output 0 at least one time it runs.
