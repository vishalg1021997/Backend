const Stream = require('stream')
// const readableStream = new Stream.Readable()
// readableStream.push('Hello World!')
const fs = require('fs');
const readStream  = fs.createReadStream(__dirname + '/read.txt');
const writeStream = fs.createWriteStream('write.txt', {flags: 'a'});
const readStreams  = fs.createReadStream("write.txt");

// readStream.on('data', function(chunk){
//     console.log('Chunk read');
//     console.log(chunk.toString());
//  })

// const data = "Using streams to write data.";
// writeStream.write(data);

readStream.on('data', function(chunk) {
    writeStream.write(chunk);
    readStreams.on('data',function(chunk){
        console.log(chunk.toString())
    })
 });