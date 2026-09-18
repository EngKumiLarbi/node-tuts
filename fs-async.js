const {readFile, writeFile} = require('fs')

readFile('./content/sub-folder/first.txt','utf-8', (err, results) => {
    if (err){
        console.log(err)
        return;
    }
    const first =results;
    
readFile('./content/secondFile.txt','utf-8', (err,results)=>{
    if (err){
        console.log(err)
        return;
    }
    const second = results;

writeFile('./content/results-async.txt',
   `here is the results of the async written file: ${first}, ${second}`,
    (err,results)=>{
    if (err){
        console.log(err)
        return;
    }
    console.log(results)
    

    }
)})})