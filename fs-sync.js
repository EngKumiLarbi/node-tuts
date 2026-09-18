const {readFileSync, writeFileSync} = require('fs')

const firstFilePath = readFileSync('./content/sub-folder/first.txt' , 'utf8')
const SecondFilePath = readFileSync('./content/secondFile.txt' , 'utf8')

writeFileSync(
    './content/result-sync.txt',
    'Here is the results : ${first}, ${second} ',
    { flag: 'a'}
)

