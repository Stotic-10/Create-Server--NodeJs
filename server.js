const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let file = req.url.split("/")[1] || "index";
  console.log(file);

  fs.readFile(file + ".html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, (error) => console.log);
