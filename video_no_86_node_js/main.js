import http from "http"

const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end('<h1> Hello World </h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// link for nodemon starting and follow some rule
// https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4


// Set-ExecutionPolicy
// $env:PSExecutionPolicyPreference
// Get-ExecutionPolicy
// Get-ExecutionPolicy -List