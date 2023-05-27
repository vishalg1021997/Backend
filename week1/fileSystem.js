const fs = require("fs");
const path = require("path");

fs.writeFile("content.txt", "This is my new Content", (err) => {
  if (err) throw err;

  console.log("File Created Sucessfully");
});

const filePath = path.join(process.cwd(), "content.txt");

//cwd means current working directory

fs.readFile(filePath, (err, content) => {
  if (err) throw err;

  console.log(content.toString());
});

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw err;

  console.log(files);
});

// fs.unlink(filePath, (err) => {    // to delete the file
//   if (err) throw err;

//   console.log("file deleted sucessfully");
// });

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw err;

  console.log(files);
});

fs.mkdir(`${process.cwd()}/Folder1/subFolder1`, { recursive: true }, (err) => {
  //recursive : true allows us to create folder inside folder
  if (err) throw err;

  console.log("folder created sucessfully");
});

// fs.rmdir(`${process.cwd()}/Folder1/`, { recursive: true }, (err) => {  // to delete the folder
//   //recursive : true allows us to create folder inside folder
//   if (err) throw err;

//   console.log("folder created sucessfully");
// });

// fs.rename(`${process.cwd()}/Folder1/subFolder1`,`${process.cwd()}/Folder1/renameSubFolder1`,(err) => {
//     //recursive : true allows us to create folder inside folder
//     if (err) throw err;

//     console.log("folder Renamed sucessfully");
//   })

fs.appendFile(filePath, "\n Some new content Added", (err) => {
  if (err) throw err;

  console.log("content added sucessfully");
});
