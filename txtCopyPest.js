// node txtCopyPest.js

const fs = require('fs')
  
fs.readFile('allClassLink.txt', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})