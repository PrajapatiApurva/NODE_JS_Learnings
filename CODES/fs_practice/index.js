import fs from "fs";

// For better understanding of fs module, refer to the official documentation: https://nodejs.org/api/fs.html

/* 
  The main Diffrence between Sync and Async functions is that Sync functions are blocking and Async functions are non-blocking.
  Sync functions will block the execution of the program until the function is completed.
  Async functions will not block the execution of the program and will continue to execute the next line of code.
  Sync functions are easier to use and understand but are not recommended for production code.
  Async functions are more complex to use and understand but are recommended for production code.

  Async functions take a callback function as the last argument.
  The callback function takes two arguments: error and data.

  In industry, it is recommended to use Async functions because they are non-blocking and will not block the execution of the program.
*/

/*
  The main fs functions are:
  - fs.access(path, mode, callback)
  - fs.access
  - fs.writeFile(file, data, callback)
  - fs.writeFileSync
  - fs.readFile(file, encoding, callback)
  - fs.readFileSync
  - fs.unlink(file, callback)
  - fs.unlinkSync
  - fs.rename(oldPath, newPath, callback)
  - fs.renameSync
  - fs.appendFile(file, data, callback)
  - fs.appendFileSync
  - fs.mkdir(path, callback)
  - fs.mkdirSync
  - fs.readdir
  - fs.readdirSync
  - fs.rmdir
  - fs.rmdirSync
  - fs.create
  - fs.createReadStream
  - fs.createWriteStream
  - fs.watch
  - fs.watchFile
  - fs.unwatchFile
  - fs.realpath
  - fs.realpathSync
  - fs.truncate
  - fs.truncateSync
  - fs.ftruncate
*/


// Check if a file exists
// fs.access("example.txt", fs.F_OK, (err) => {
//   if (err) {
//     console.log("File does not exist");
//     return;
//   }
//   console.log("File exists");
// });

// Check if a file exists (Sync)
// try {
//   fs.accessSync("example.txt", fs.F_OK);
//   console.log("File exists");
// } catch (err) {
//   console.log("File does not exist");
// }

// Create a file and write content to it (Async)
// fs.writeFile("example.txt", "Hello World, I am Apurva!", (err) => {
//   if (err) throw err;
//   console.log("File created successfully");
// });

// Create a file and write content to it (Sync)
// fs.writeFileSync("example_sync.txt", "Hello World!");
// console.log("File created successfully");

// Read a file (Async)
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Read a file (Sync)
// const data = fs.readFileSync("example_sync.txt", "utf8");
// console.log(data);

// Copy a file (Async)
// fs.copyFile("example.txt", "example_copy.txt", (err) => {
//   if (err) throw err;
//   console.log("File copied successfully");
// });

// Copy a file (Sync)
// fs.copyFileSync("example.txt", "example_copy_sync.txt");
// console.log("File copied successfully");

// Delete a file (Async)
// fs.unlink("example.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully");
// });

// Delete a file (Sync)
// fs.unlinkSync("example_sync.txt");
// console.log("File deleted successfully");

// Rename a file (Async)
// fs.rename("new_example.txt", "example.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed successfully");
// });

// Rename a file (Sync)
// fs.renameSync("new_example.txt", "example.txt");
// console.log("File renamed successfully");

// Append content to a file (Async)
// fs.appendFile("example.txt", "\nHello World, I am apurva who is trying fs module methods!", (err) => {
//   if (err) throw err;
//   console.log("Content appended successfully");
// });

// Append content to a file (Sync)
// fs.appendFileSync("example.txt", "\nHello World, I am apurva who is trying fs module methods!");
// console.log("Content appended successfully");