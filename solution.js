var chalk = require('chalk');
var fs = require('fs');

fs.readFile('documents/constitution.txt',function(err,data){
  var paragraphs = data.toString().split('\n\n');
  for(var i=0;i<paragraphs.length;i++){
    if(paragraphs[i].includes('People')){
      console.log(chalk.green(paragraphs[i]));
    }
    else if(paragraphs[i].includes('Congress')){
      console.log(chalk.blue(paragraphs[i]));
    }
    else if(paragraphs[i].includes('President')){
      console.log(chalk.yellow(paragraphs[i]));
    }else{
      console.log(paragraphs[i]);
    }
  }
});
