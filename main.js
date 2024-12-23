const http = require('http');
const fs = require('fs');

// TODO: Create an HTTP server
const server = http.createServer((req, res)=>{
    fs.readFile('output.txt', (err, data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data.toString());
        }
    })
});

// TODO: Listen on port 3000
server.listen(3000, ()=>{
    console.log('server listening on port number 3000');
})

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

