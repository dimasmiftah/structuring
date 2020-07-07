// import fs for loading the file
let fs  = require('fs');

// srtucturing the data
let transactions = fs.readFileSync('transactions.txt', 'utf-8') // read file transaction.txt and buffer it using utf-8
  .trim() // remove extra line in the end of the data 
  .split('\n') // spilt data based on new line and put them inside an array
  .map(item => item.split('\t')) // split every item of the array based on tab and put them inside an array 
  .reduce((result,item) => {
    result[item[0]] = result[item[0]] || []; // assign [] to customer if it's haven't assigned yet
    result[item[0]].push({ // adding customer's shop list to customer 
      name: item[1],
      price: item[2],
      quantity: item[3].replace('\r',''), // remove unnecessary character which comes out of nowhere
    })
    return result; // return final result
  }, {}) // starting result is an empty object

// log the result to the console
console.log(transactions);