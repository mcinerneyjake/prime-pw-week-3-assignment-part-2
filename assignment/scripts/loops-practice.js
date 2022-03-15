console.log('****** Loops Practice *******');

// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

for (let i = 0; i <= 5; i++) {
  // We need to change the range of i in the for loop. So, instead of i < 4;, we need to use i < 6; (because there are six indicies total that need to be logged).
  console.log(i);
} // DONE

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for (let i = 3; i < 6; i++) {
  // We need to change i = 0; to i = 3; to begin the loop at the number 3 instead of 0.
  console.log(i);
} // DONE

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    // The %, or remainder, of even whole numbers equals 0.
    // (i % 2 === 0) prints out only even whole numbers in the given range of i <= 10.
    // If we did (i % 2 !== 0) instead, we would be able to log only odd whole numbers in the given range of i <= 10.
    console.log(i);
  }
} // DONE

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i = 5; i > -1; i--) {
  console.log(i);
} // DONE

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for (let element of stars) {
  console.log(element);
} // DONE

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let i = 0;

while (i < 5) {
  console.log(stars[i]);
  i++;
} // DONE

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

i = 0;

while (i < 6) {
  console.log(i);
  i++;
} // DONE

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

i = 10;

while (i > 4) {
  console.log(i);
  i--;
} // DONE
