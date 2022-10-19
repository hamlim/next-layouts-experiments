const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;

let server,
  isReady = false,
  isLive = true;

const app = express();
const nextApp = next({ dev: process.env.NODE_ENV === "development" });
const handler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  console.log(`Next.js prepared.`);

  isReady = true;
});

app.get("/liveness", (_, response) => {
  response.send(isLive);
});
app.get("/readiness", (_, response) => {
  response.send(isReady);
});

app.get("*", handler);

server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
