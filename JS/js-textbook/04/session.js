import http from "http";
import fs from "fs";
// import qs from "querystring"; // DEPRECATED
import url, { URLSearchParams } from 'url'

function parseCookies(/** @type string */ cookie = "") {
  return Object.fromEntries(
    cookie
      .split(";")
      .map((x) => x.split("="))
      .map(([k, ...vs]) => [k, vs.join("=")])
      .map(([k, v]) => [k.trim(), decodeURIComponent(v)])
  );
}

const session = {};

http
  .createServer((req, res) => {
    if (req.url.startsWith("/login")) {
      const params = new URLSearchParams(url.parse(req.url).query);
      const name = params.get("name");

      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);

      const randomInt = +new Date();
      session[randomInt] = {
        name,
        expires
      }

      res.writeHead(302, {
        location: "/",
        "set-cookie": `session=${randomInt}; Expires=${expires.toUTCString()}; Path=/; HttpOnly`,
      });
      res.end()
    } else {
      const cookies = parseCookies(req.headers.cookie);
      if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {
          "content-type": "text/html; charset=utf-8"
        })
        res.end(`<p>Hello ${session[cookies.session].name}</p>`)
      } else {
        fs.readFile("./server4.html", (err, data) => {
          if (err) {
            throw err;
          }
    
          res.write(data);
          res.end();
        });
      }
    }
  })
  .listen(8080, () => {
    console.log("Listening...");
  });
