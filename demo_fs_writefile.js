var fs = require('fs');

//Create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello content!', function(err){
    if (err) throw err;
    console.log('Saved!');
});