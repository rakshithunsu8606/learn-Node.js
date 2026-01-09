const path=require("path")

console.log(__dirname);
console.log(__filename);

console.log(path.basename('D:/Rakshit c/learn Node.js/src/path.js'));

console.log(path.parse('D:\Rakshit c\learn Node.js\src\path.js'));

console.log(path.resolve('D:\Rakshit c\learn Node.js\src\path.js'));

console.log(path.extname('.index.md'));

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


