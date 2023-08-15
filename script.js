// ******************************Task 1****************************** \\
/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
/*
function smash (words) {
   return words.join(" ")
};
*/
// ******************************Task 2****************************** \\
/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
/*
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
*/
// ******************************Task 3****************************** \\
/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
/*
var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
*/
// ******************************Task 4****************************** \\
/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
/*
var countSheep = function (num){
  let result = '';
  for (let i = 1; i <= num; i +=1) {
   result += i + ' sheep...';}
  return result;
}

console.log(countSheep(3));
*/