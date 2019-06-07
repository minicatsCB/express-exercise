const express = require("express");
const app = express();
const port = 3000;

const https = require("https");

let options = {
    index: "index.html"
};
app.use(express.static("public", options));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/cors", (req, res) => {
    let origin = new URL(req.query.url).origin;
    console.log(new URL(req.query.url).origin);
    let requestUrl = req.query.url;
	https.get(requestUrl, (resp) => {
		let data = "";

		resp.on("data", (chunk) => {
			data += chunk;
		});

		resp.on("end", () => {
            res.set("Access-Control-Allow-Origin", "*");
            res.send(data);
		});
	}).on("error", (error) => {
		console.log("Error: " + error.message);
    });
});

app.listen(port, () => console.log("Listening on port " + port));
