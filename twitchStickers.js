// Search username in https://twitchemotes.com/
// let arr = []
// document.querySelectorAll("center").forEach(c => {
//  arr.push(c.firstChild?.firstChild?.src)
// })
// arr = arr.filter(a => a != undefined)
// arr = arr.map(a => a.replace('2.0', '3.0'))

// const arr = [ ... ]

const https = require("follow-redirects").https,
  Stream = require("stream").Transform,
  fs = require("fs");

const dir = "twitch";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

arr.forEach((el, idx) => {
  const url = el;

  const options = {
    method: "GET",
    hostname: "static-cdn.jtvnw.net",
    headers: {},
    maxRedirects: 20,
  };

  https
    .request(url, options, function (response) {
      const data = new Stream();
      response.on("data", function (chunk) {
        data.push(chunk);
      });
      response.on("end", function () {
        fs.writeFileSync(`${dir}/image${idx}.png`, data.read());
      });
    })
    .end();
});
