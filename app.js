const express = require("express");
const app = express();
const port = 3000;

let options = {
    index: "index.html"
};
app.use(express.static("public", options));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log("Listening on port " + port));
