const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html', 'index.html'));
    app.use('/public/css', express.static(__dirname + '/public/css'));
    app.use('/public/images', express.static(__dirname + '/public/images'));
    app.use('/public/html', express.static(__dirname + '/public/html'));
    app.use('/public/python', express.static(__dirname + '/public/python'));
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});