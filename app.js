const getPixels2 = require("./node-pixels");
const getPixels = require("./node-pixels");

getPixels2("./img.jph").then((data) => {
	console.log("Success:", data);
});

getPixels("./img.jpg", (err, data) => {
	console.log(data);
});
