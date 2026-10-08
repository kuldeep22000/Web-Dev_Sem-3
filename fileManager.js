

const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");
fs.writeFileSync(fileName, "Hello Node.js");
console.log("File Created");

console.log("Reading File");
const content = fs.readFileSync(fileName, "utf8");
console.log(content);

fs.appendFileSync(fileName, "\nLearning FS Module");
console.log("File Updated");

const updatedContent = fs.readFileSync(fileName, "utf8");
console.log(updatedContent);


try {
  fs.unlinkSync(fileName);
  console.log("File Deleted");
} catch (err) {
  console.log("Error: File not found, could not delete.");
}
