/** @format */

const express = require("express");

const app = express();
const port = process.env.PORT || 443;

app.get("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=/invmoon"/>');
});

app.get("/invmoon", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.com/api/oauth2/authorize?client_id=898435982775435264&permissions=6508997968&scope=bot%20applications.commands"/>`
  );
});

app.get("discord", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.gg/vFKaw3eRHu"/>`
  );
});


app.listen(port, () => {
  console.log(`Loaded Web server | Port : (${port})`, "Success");
});
