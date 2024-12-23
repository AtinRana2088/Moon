/** @format */

const express = require("express");

const app = express();
const port = process.env.PORT || 443;

app.get("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=/discord"/>');
});

app.get("/discord", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.gg/rdAjw9Ema9"/>`
  );
});

app.get("/insta", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://www.instagram.com/repub1ic.discord"/>`
  );
});

app.get("/bot", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.com/oauth2/authorize?client_id=898435982775435264&permissions=8&scope=bot%20applications.commands"/>`
  );
});

app.get("/vote", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://top.gg/bot/898435982775435264"/>`
  );
});
