const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from AWS CI/CD Pipeline!");
});

// Start server on port 3000
server.listen(3000, () => {
    console.log("Server running on port 3000");
});

