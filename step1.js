const fs = require("fs");
const axios = require("axios");
// const argv = process.argv;
let path = process.argv[2];

function cat(path) {
  //
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log("THIS IS THE ERROR: ", err);
      process.exit(1);
    }
    console.log(data);
  });
}

cat(path);
