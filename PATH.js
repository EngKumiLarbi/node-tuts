const path  = require ('path')


console.log("separator: " + path.sep)
const filepath =path.join('/content','sub-folder','test.txt')
console.log("the filepath: "+ filepath)

const base = path.basename(filepath)
console.log("base path: " + base )

const absolute = path.resolve(__dirname,'content','sub-folder','test.txt')
console.log("the Abs dir: " + absolute)