/*-----------------------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
  return "Hello!";
}

/*-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(num){
  let sum = num + 1;
  return (sum)
}

/*----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(x,y){
  if (typeof x !== 'number' || typeof y !== 'number') {
    return NaN;
  }
  let sum = x + y;
  return sum;
}


/*----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

function sumNumbers(array) {
  // Check if the array is empty, return 0 if true
  if (array.length === 0) {
    return 0;
  }
  // Use the reduce method to sum all numbers in the array
  return array.reduce((acc, num) => acc + num, 0);
}


/*----------------------------------------------------------------------------*/
// Your solution for 04-addList here:

//use spread for these kind of questions
function addList(...numbers) {
  // if no arguments are passed, return 0
  if (numbers.length === 0) {
    return 0;
  }
  // we use the reduce method to get the some of all numbers
  return numbers.reduce((acc, num) => acc + num, 0);
}


/*----------------------------------------------------------------------------*/
// Your solution for 05-computeRemainder here:

function computeRemainder(dividend, divisor) {
  // If the divisor is 0, return Infinity
  if (divisor === 0) {
    return Infinity;
  }
  // Calculate the remainder using the subtraction approach
  let quotient = Math.floor(dividend / divisor); 
  return dividend - (quotient * divisor); 
}

/*----------------------------------------------------------------------------*/
// Your solution for 06-range here:

function range(start, end) {
  if (start > end) return "First argument must be less than second";
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

/*-----------------------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString(str) {
  return str.split('').reverse().join('').toUpperCase();
}

/*-----------------------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

function removeEnds(str) {
  if (str.length < 3) return '';
  return str.substring(1, str.length - 1);
}

/*----------------------------------------------------------------------------*/
// Your solution for 09-charCount here:

function charCount(str) {
  const result = {};
  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

/*----------------------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

function formatWithPadding(num, padChar, length) {
  let numStr = num.toString(); // Converts no to string
  if (numStr.length >= length) {
    return numStr; // No padding needed if the no is already long
  }
  
  let paddingNeeded = length - numStr.length;
  let padding = padChar.repeat(paddingNeeded); // Create the padding string
  
  // Return the padded number string
  return padding + numStr;
}
/*----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:


function isPalindrome(str) {
  let normalizedStr = str.replace(/\s+/g, '').toLowerCase();
  
  if (normalizedStr.length <= 1) {
    return true;
  }

  let reversedStr = normalizedStr.split('').reverse().join('');
  
  return normalizedStr === reversedStr;
}

/*----------------------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return NaN;
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) distance++;
  }
  return distance;
}

/*----------------------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(str) {
  return str
    .split("")
    .map((char, index) => char.repeat(index + 1))
    .join("-");
}

/*---------------------------------------------------------------------------*/
// Your solution for 14-fromPairs here:

function fromPairs(pairs) {
  let obj = {};
  pairs.forEach(pair => {
    obj[pair[0]] = pair[1];
  });
  return obj;
}


/*----------------------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

function mergeObjects(target, ...sources) {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      target[key] = source[key];
    });
  });
  return target;
}

/*----------------------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced(items) {
  let highest = items[0];
  for (let i = 1; i < items.length; i++) {
    if (items[i].price > highest.price) {
      highest = items[i];
    }
  }
  return highest;
}

/*----------------------------------------------------------------------------*/
// Your solution for 17-mapArray here:

function mapArray(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }
  return result;
}



/*---------------------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

function reduceArray(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i);
  }
  return accumulator;
}

/*----------------------------------------------------------------------------*/
// Your solution for 19-flatten here:

function flatten(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(flatten(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}


/*----------------------------------------------------------------------------*/
// Your solution for 20-primeFactors here:


function primeFactors(n) {
  let factors = [];
  for (let i = 2; i <= n; i++) {
    while (isPrime(i) && n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}


/*----------------------------------------------------------------------------*/
// Your solution for 21-isPrime here:

function isPrime(x) {
  if (!Number.isInteger(x) || x <= 1) return false;
  if (x <= 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;

  for (let i = 5; i * i <= x; i += 6) {
    if (x % i === 0 || x % (i + 2) === 0) return false;
  }
  return true;
}



/*---------------------------------------------------------------------------*/
// Your solution for 22-intersection here:


function intersection(arr1, arr2) {
  let result = [];
  let copy = [...arr2];
  arr1.forEach(val => {
    let idx = copy.indexOf(val);
    if (idx > -1) {
      result.push(copy.splice(idx, 1)[0]);
    }
  });
  return result;
}


/*----------------------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:


function balancedBrackets(str) {
  let stack = [];
  let brackets = { '(': ')', '[': ']', '{': '}' };
  for (let char of str) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}



/*---------------------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:

function isWinningTicket(ticket) {
  return ticket.every(([str, code]) => {
    return str.split('').some(char => char.charCodeAt(0) === code);
  });
}


/*----------------------------------------------------------------------------*/
// Your solution for 25-getNumForIP here:

function getNumForIP(ip) {
  return ip
    .split(".")
    .reverse()
    .reduce((total, num, i) => total + parseInt(num) * 256 ** i, 0);
}

/*----------------------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

function toCamelCase(str) {
  let result = "";
  let nextCharUpperCase = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      nextCharUpperCase = true;
    } else {
      if (nextCharUpperCase) {
        result += str[i].toUpperCase();
        nextCharUpperCase = false;
      } else {
        result += str[i];
      }
    }
  }

  return result;
}


/*----------------------------------------------------------------------------*/
// Your solution for 27-countTheBits here:


function countTheBits(num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      count++;
    }
    num = Math.floor(num / 2);
  }
  return count;
}


/*----------------------------------------------------------------------------*/
// Your solution for 28-gridTrip here:

function gridTrip(start, moves) {
  let pos = [...start];
  let parts = moves.match(/([UDLR]\d+)/g) || [];

  for (let i = 0; i < parts.length; i++) {
    let move = parts[i];
    let dir = move.charAt(0);  // Get direction from the first character
    let dist = Number(move.slice(1));  // Convert the rest to a number

    if (dir === "U") {
      pos[1] += dist;
    } else if (dir === "D") {
      pos[1] -= dist;
    } else if (dir === "R") {
      pos[0] += dist;
    } else if (dir === "L") {
      pos[0] -= dist;
    }
  }

  return pos;
}



/*----------------------------------------------------------------------------*/
// Your solution for 29-addChecker here:

function addChecker(array, sum) {
  let start = 0, end = array.length - 1;
  while (start < end) {
    let currentSum = array[start] + array[end];
    if (currentSum === sum) return true;
    if (currentSum < sum) start++;
    else end--;
  }
  return false;
}

/*----------------------------------------------------------------------------*/
// Your solution for 30- here:

function totalTaskTime(queue, threads) {
  if (queue.length === 0) return 0;

  const workers = Array(threads).fill(0);

  for (let i = 0; i < queue.length; i++) {
    let minWorkerIndex = workers.reduce((minIndex, time, index) => 
      time < workers[minIndex] ? index : minIndex, 0);

    workers[minWorkerIndex] += queue[i];
  }

  return Math.max(...workers);
}

