const fs = require("fs");
const axios = require("axios");

let path = process.argv[2];

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log("THIS IS THE ERROR: ", err);
      process.exit(1);
    }
    console.log(data);
  });
}

async function webCat(url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (e) {
    console.log(`Error fetching ${path}, error code: ${e.response.status}`);
    process.exit(1);
  }
}

if (path.startsWith("http://")) {
  webCat(path);
} else {
  cat(path);
}