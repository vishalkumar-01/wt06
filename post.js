const http = require('http');
const express=require("express");
const app=express();
const path=require("path");

const hbs=require("hbs");
const collection=require("./mon")
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async() => {
      const formData = qs.parse(body);
      const data={
        fr:formData.from,
        to:formData.to,
        cl:formData.class,
        ad:formData.adults,
        ch:formData.children,
        in:formData.infants,
        tt:formData.ntickk
      }
      await collection.insertMany([data]);

     
      res.writeHead(600, {'Content-Type': 'text/html'});
      console.log(`Departure Airport: ${formData.from}\nArrival Airport: ${formData.to} \n Total No. of Tickets: ${formData.ntickk} \n `);
      res.end(`Departure Airport: ${formData.from}\n<br>Arrival Airport: ${formData.to} \n<br> Total No. of Tickets: ${formData.ntickk} \n `);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(3004, () => {
  console.log('Server running on port 3000');
});