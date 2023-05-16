const http = require('http');
const qs = require('querystring');
const collection=require("./mongodb")
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end',async () => {
      const formData = qs.parse(body);
        const from=formData.from;   
        const to=formData.to; 
        console.log(from);
        console.log(to);
        await collection.find({fr: from, to: to })
        .then((user) => {
          if (!user) {
            console.log('User not found');
            res.end("failed");
          } else {
            console.log('User signed in:', user);
            res.end("user signed in successfully");
          }
        })
        .catch((error) => {
          console.log('Error finding user:', error);
          res.end("invalid username password");
        });
        
    });
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(6211, () => {
  console.log('Server running on port 3010');
});