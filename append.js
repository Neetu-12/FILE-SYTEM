// var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.appendFile('append.txt', 'Hello content! ', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
