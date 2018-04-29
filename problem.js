var fs = require('fs');

fs.readFile('documents/constitution.txt',function(err,data){
  var paragraphs = data.toString().split('\n\n');
  console.log(paragraphs);
});
