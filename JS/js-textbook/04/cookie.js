import http from "http";

function parseCookies(/** @type string */ cookie = "") {
  return Object.fromEntries(
    cookie
      .split(";")
      .map((x) => x.split("="))
      .map(([k, ...vs]) => [k, vs.join("=")])
      .map(([k, v]) => [k.trim(), decodeURIComponent(v)])
  );
}

http
  .createServer((req, res) => {
    const cookie = req.headers.cookie;

    console.log(req.url, parseCookies(cookie));

    res.writeHead(200, { "set-cookie": "username=spaupa" });
    res.write(`<p>${cookie === undefined ? "New User" : "Old User"}</p>`);
    res.write(`<p>${JSON.stringify(parseCookies(cookie))}</p>`);
    res.end();
  })
  .listen(8080);
