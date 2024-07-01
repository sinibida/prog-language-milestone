import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => { // Load Index.html
    if (err) {
      throw err;
    }

    res.end(data)
  })
})

server.listen(8080, () => {
  console.log("Listening on 8080...")
})

server.on('error', (err) => {
  console.error(err)
})
