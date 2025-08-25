const express = require("express");
const redis = require("redis");
const app = express();
// Hier wird die Verbindung zur Redis-Datenbank hergestellt.

// Der Hostname 'redis' ist der Name unseres zweiten Services in der Compose-Datei!
const client = redis.createClient({ host: "redis", port: 6379 });
client.set("visits", 0);
app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send(`<h1>Anzahl der Besuche: ${visits}</h1><p>Lade die
Seite neu, um den Zähler zu erhöhen.</p>`);
    client.set("visits", parseInt(visits) + 1);
  });
});
app.listen(8080, () => {
  console.log("Besucherzähler-App lauscht auf Port 8080");
});
