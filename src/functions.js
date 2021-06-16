function isBigger(a, b) {
  return a > b;
  }
  
  
  function isSmaller(a, b) {
  return a < b;
  }
  
  
  
  function getMin(...numbers) {
   let min = numbers[0];
   numbers.forEach(function(item) {
     if (item < min) {
       min = item;
     }
   })
   return min;
  }
  
  
  function makeNumber(string) {
  let res = '';
  for (let char of string) {
    if (!isNaN(parseInt(char))) {
       res += char;
      }
  }
  return res;
  }
  
  function countNumbers(string) {
    const res = {};
    for (let char of string) {
   if (!isNaN(parseInt(char))) {
     if(!res[char]) {
       res[char] = 0
     }
     res[char] += 1;
   }
    }
    return res;
  }

  function pipe(num, ...functions) {
  let res = num;
  functions.forEach(function(cb) {
    res = cb(res)
  })
  
  return res;
}
  
  function isLeapYear (date) {
  const isLeapYearHelper = (year) => (year % 400 == 0 ? true : year % 100 == 0 ? false : year % 4 == 0 ? true : false)
  const datenew = new Date(date)
  const isValid = !isNaN(datenew.getTime())
  return isValid ? isLeapYearHelper(datenew.getFullYear()) ? `${datenew.getFullYear()} is a leap year` : `${datenew.getFullYear()} is not a leap year` : 'Invalid Date'
  }


module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
};
