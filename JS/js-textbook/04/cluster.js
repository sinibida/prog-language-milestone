import http from "http";
import fs from "fs";
import cluster from "cluster";
import os from "os";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master Process ${process.pid} Started`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker Process ${worker.process.pid} Exited`);
    cluster.fork();
  });
} else {
  http
    .createServer((req, res) => {
      res.end(`<p>Process ${process.pid} Here!</p>`);
      setTimeout(() => process.exit(), 1000);
    })
    .listen(8080, () => {});

  console.log(`Worker Process ${process.pid} Started`);
}
