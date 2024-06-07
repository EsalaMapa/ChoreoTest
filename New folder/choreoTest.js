const express = require('express');
const getR = express();
const PORT = 3000;

getR.get('/', (req, res) => {
	res.json({"hello":" Hello World"});
})

getR.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

