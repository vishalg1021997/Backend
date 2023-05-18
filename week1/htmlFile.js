const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!");
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });

let indexFile;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};

// const requestListener = function (req, res) {
//     fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//     }).catch(err => {
//         res.writeHead(500);
//         res.end(err);
//         return;
//     });
// };
const server = http.createServer(requestListener);

// const some = () => {
  fs.readFile(__dirname + "/index.html")
    .then((contents) => {
      indexFile = contents;
      server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
      });
    })
    .catch((err) => {
      console.error(`Could not read index.html file: ${err}`);
      process.exit(1);
    });
// };

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });
