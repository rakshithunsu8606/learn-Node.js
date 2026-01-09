// const fs = require("fs");

// const fileName = "test.txt";
// const fileName1 = "test1.txt";

// //---------sync---------//

// //*******writefile********//


// fs.writeFileSync(fileName, "This Is The Initial Data", "utf-8");

// console.log("File created successfully");

//*******Readefile********//


// const Read=fs.readFileSync(fileName,"utf-8")

// console.log(Read.toString());

// console.log(Read);

//*******appendfile********//


// const appendfile=fs.appendFileSync(fileName, "\nThis Is The Update Data ", "utf-8");

// console.log(appendfile);

//*******unlinkfile********//


// const unlinkfile=fs.unlinkSync(fileName, "utf-8");

// console.log(unlinkfile);


//*******Renamefile********//

// const New_Name="TestHello.txt"

// const Rename=fs.renameSync(fileName,New_Name)

// console.log(Rename);




//---------async---------//

// fs.writeFile(fileName1, "This Is The Initial Data Hello !!!", "utf-8", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created successfully");
//     }
// }) 



// const Readefile=fs.readFile(fileName1,"utf-8", (err,data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created successfully","\n",data);
//     }
// }) 

// console.log(Readefile);


// const appendfile = fs.appendFile(fileName1, "\nThis Is The Update Data ", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created successfully");
//     }
// }) 

// console.log(appendfile);


// const unlinkfile=fs.unlink(fileName1, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created successfully");
//     }
// }) 

// console.log(Readefile);


// const New_Name="Test1.txt"

// const Rename=fs.renameSync(fileName1,New_Name)

// console.log(Rename);


const fs = require("fs");

// fs.mkdir('./src/Data', { recursive: true }, (err) => {
//     console.log(err);

// }); 

// fs.writeFile('./src/Data/demo.txt', "This Is The Initial Data Hello !!!", "utf-8", (err) => {
//     console.log(err);
// }) 

// fs.appendFile('./src/Data/demo.txt', "This Is The Initia Data Hello okk", "utf-8", (err) => {
//     console.log(err);
// }) 

fs.readFile('./src/')