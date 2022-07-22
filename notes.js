//SOME AWESOME METHODS FOR STRINGS
let practice_with_some_strings = "Hello, world"
//obtaining portions of a string
//substring and return "ell" ----->
let sub = practice_with_some_strings.substring(1,4);
console.log(sub);
//slice and return "worl" -----> 
let sub1 = practice_with_some_strings.slice(7,-1);
console.log(sub1)
//split and return an array of both words -----> 
console.log(practice_with_some_strings.split(", ", 1)); // 1 is for only one time
//Bonus: what method can take an array of words and put them back together
console.log(practice_with_some_strings.split(", ").join(" "));


//searching a string
//indexOf "H" ---->
console.log(practice_with_some_strings.indexOf("lo")); //3
//lastIndexOf "l" ----> 
console.log(practice_with_some_strings.lastIndexOf("l"));

//boolean searching funtions
console.log(practice_with_some_strings.startsWith("Hello"));
//startsWith "Hello" gives us?---> 
console.log(practice_with_some_strings.endsWith("world"));
//endsWith "!" ---> 


//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
console.log(practice_with_some_strings.replace("llo", "ya"));
//toLowerCase ---> take a guess lol
console.log(practice_with_some_strings.toLowerCase());
//toUpperCase ---> take another guess
console.log(practice_with_some_strings.toUpperCase());


//inspecting individual characters of a string
//charAt 0 ---> 
console.log(practice_with_some_strings.charAt(0));
//charCodeAt 0  --->
console.log(practice_with_some_strings.charCodeAt(0));
//Bonus: find the range of lower and uppercase letters
// 65-90    97-122
// A...Z    a....z

//space trim funtctions
//bonus mess with these methods
// let test = "   test "
// //trim test --->
// //Bonus: mess with the other trims
// //trimStart and trimEnd

// // STRING INTERPOLATION
let first_name = "kelvin"
let last_name = "arauz"
//use backticks and ${} to inject variables
//everything inside ${} is interpreted as a JS expression. everything outside the braces are normal string literal text
console.log(`my full name is ${first_name} ${last_name}`);

//PATTERN MATCHING
//JavaScript defines a datatype known as `regular expressions` for pattern matching in strings
//text between a pair of forward slashes makes a regular expression literal. more on regex reading here
//https://regexone.com/ a good site to learn regex fundamentals
//https://regexr.com/ for when you become comfortable with the basics of regex

// [1-9][0-9]*/ //match a nonzero digit, followed by any number of digits
// //                0     6  10 13
let regex_text = "blast off in 3, 2, 1"
let pattern = /\d+/g
console.log(pattern.test(regex_text))
console.log(regex_text.search(pattern));



/*Given a string of words separated by spaces. The task is to find the first maximum length even word from the string. Eg: “You are given an array of n numbers” The answer would be “an” and not “of” because “an” comes before “of”.
Examples: 
 

Input:  "this is a test string"
Output:  string
Even length words are this, is, test, string. Even
maximum length word is string.

Input:  "geeksforgeeks is a platform for geeks"
Output:  platform
Only even length word is platform.
you can put each word in the string into an array and then use modulo in order to check what words are even
*/